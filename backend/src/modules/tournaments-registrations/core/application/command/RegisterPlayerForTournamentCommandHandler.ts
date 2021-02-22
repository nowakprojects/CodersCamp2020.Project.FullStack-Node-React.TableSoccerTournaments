import {CommandHandler} from "../../../../shared/application/command/CommandHandler";
import {CommandResult} from "../../../../shared/application/command/CommandResult";
import {DomainEventBus} from "../../../../shared/application/event/DomainEventBus";
import {CurrentTimeProvider} from "../../TournamentsRegistrationsModule";
import {registerTournamentPlayer, TournamentRegistrations} from "../../domain/TournamentRegistrations";
import {TournamentId} from "../../domain/TournamentId";
import {TournamentRegistrationsRepository} from "../TournamentRegistrationsRepository";
import {RegisterPlayerForTournament} from "./RegisterPlayerForTournament";
import {AvailablePlayersForTournament} from "./AvailablePlayersForTournament";
import {PlayerId} from "../../domain/PlayerId";

export class RegisterPlayerForTournamentCommandHandler implements CommandHandler<RegisterPlayerForTournament> {

  constructor(
      private readonly eventBus: DomainEventBus,
      private readonly currentTimeProvider: CurrentTimeProvider,
      private readonly repository: TournamentRegistrationsRepository,
      private readonly availablePlayersForTournament: AvailablePlayersForTournament //Teraz implementacja np. sprawdza czy w ogóle istnieje taki gracz, ale np. może weryfikować, że turniej jest tylko dla osób płacących składkę.
  ) {
  }

  async execute(command: RegisterPlayerForTournament): Promise<CommandResult> {
    const tournamentId = TournamentId.from(command.tournamentId);
    const playerId = PlayerId.from(command.playerId);
    const tournamentRegistrations = await this.repository.findByTournamentId(tournamentId)

    const canPlayerTakiePartInTheTournament = await this.availablePlayersForTournament.canPlay(playerId);
    const {state, events} = registerTournamentPlayer(tournamentRegistrations, {playerId}, this.currentTimeProvider, canPlayerTakiePartInTheTournament)

    await this.repository.save(state)
    this.eventBus.publishAll(events)
    return CommandResult.success()
  }

}
