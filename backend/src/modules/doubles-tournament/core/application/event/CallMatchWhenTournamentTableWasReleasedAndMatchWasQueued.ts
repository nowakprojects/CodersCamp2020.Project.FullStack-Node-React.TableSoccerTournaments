import { EventHandler } from '../../../../../shared/core/application/event/EventHandler';
import { CommandPublisher } from '../../../../../shared/core/application/command/CommandBus';
import { MatchesQueueRepository } from '../MatchesQueueRepository';
import { TablesQueueRepository } from '../TablesQueueRepository';
import { TournamentTableWasReleased } from '../../../../tournament-tables/core/domain/event/TournamentTableWasReleased';
import { CallMatch } from '../command/CallMatch';
import { QueuedMatch } from '../../domain/QueuedMatch';
import { MatchesQueue } from '../../domain/MatchesQueue';
import { MatchWasQueued } from '../../domain/event/MatchWasQueued';
import { QueuedTable } from '../../domain/QueuedTable';

export class CallMatchWhenTournamentTableWasReleasedAndMatchWasQueued implements EventHandler<TournamentTableWasReleased | MatchWasQueued> {
  private readonly commandPublisher: CommandPublisher;
  private readonly matchesQueueRepository: MatchesQueueRepository;
  private readonly tablesQueueRepository: TablesQueueRepository;

  constructor(
    commandPublisher: CommandPublisher,
    matchesQueueRepository: MatchesQueueRepository,
    tablesQueueRepository: TablesQueueRepository,
  ) {
    this.commandPublisher = commandPublisher;
    this.matchesQueueRepository = matchesQueueRepository;
    this.tablesQueueRepository = tablesQueueRepository;
  }

  async handle(event: TournamentTableWasReleased | MatchWasQueued): Promise<void> {
    const tournamentId = event.tournamentId;
    const matches = await this.matchesQueueRepository.findByTournamentId(tournamentId);
    const matchToCall = matches ? this.findFirstMatchToCall(matches) : undefined;
    const freeTable = await this.findFreeTables(tournamentId);
    if (event instanceof TournamentTableWasReleased && matchToCall) {
      const command = new CallMatch({
        tournamentId: tournamentId,
        calledMatch: {
          matchNumber: matchToCall.matchNumber.raw,
          team1Id: matchToCall.team1Id.raw,
          team2Id: matchToCall.team2Id.raw,
        },
        tableNumber: event.tableNumber,
      });
      await this.commandPublisher.execute(command);
    }
    if (event instanceof MatchWasQueued && freeTable) {
      const command = new CallMatch({
        tournamentId: tournamentId,
        calledMatch: { matchNumber: event.matchNumber, team1Id: event.team1Id, team2Id: event.team2Id },
        tableNumber: freeTable.tableNumber,
      });
      await this.commandPublisher.execute(command);
    }
  }

  private async findFreeTables(tournamentId: string): Promise<QueuedTable | undefined> {
    const tournamentTables = await this.tablesQueueRepository.findByTournamentId(tournamentId);
    return tournamentTables?.queuedTables.filter((table) => table.isFree)[0];
  }

  private findFirstMatchToCall(matches: MatchesQueue): QueuedMatch {
    const notStartedMatches = matches.queuedMatches.filter((match) => !match.started);
    const lowestMatchNumber = Math.min(...notStartedMatches.map((match) => match.matchNumber.raw));
    return notStartedMatches.filter((match) => match.matchNumber.raw === lowestMatchNumber)[0];
  }
}
