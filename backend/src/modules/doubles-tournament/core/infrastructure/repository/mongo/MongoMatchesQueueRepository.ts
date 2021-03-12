import { MatchesQueueRepository } from '../../../application/MatchesQueueRepository';
import { MatchesQueue } from '../../../domain/MatchesQueue';
import mongoose, { Schema } from 'mongoose';
import { TournamentId } from '../../../domain/TournamentId';
import { QueuedMatch } from '../../../domain/QueuedMatch';
import { TeamId } from '../../../domain/TeamId';

export class MongoMatchesQueueRepository implements MatchesQueueRepository {
  async findByTournamentId(tournamentId: string): Promise<MatchesQueue | undefined> {
    const mongoFindResult = await MongoMatchesQueue.findById(tournamentId);
    return mongoFindResult ? mongoDocumentToDomain(mongoFindResult) : undefined;
  }

  async save(matchesQueue: MatchesQueue): Promise<void> {
    await MongoMatchesQueue.findByIdAndUpdate(
      { tournamentId: matchesQueue.tournamentId },
      {
        tournamentId: matchesQueue.tournamentId.raw,
        queuedMatches: matchesQueue.queuedMatches.map((queuedMatch) => ({
          matchNumber: queuedMatch.matchNumber,
          team1Id: queuedMatch.team1Id.raw,
          team2Id: queuedMatch.team2Id.raw,
        })),
      },
    );
  }
}

type MongoMatchesQueue = {
  readonly tournamentId: string;
  readonly queue: {
    matchNumber: number;
    team1Id: string;
    team2Id: string;
  }[];
} & mongoose.Document;

const QueuedMatchSchema = new mongoose.Schema({
  matchNumber: Schema.Types.Number,
  team1Id: Schema.Types.String,
  team2Id: Schema.Types.String,
});

const MatchesQueueSchema = new mongoose.Schema({
  tournamentId: Schema.Types.String,
  queue: {
    type: [QueuedMatchSchema],
  },
});

const MongoMatchesQueue = mongoose.model<MongoMatchesQueue>('MatchesQueue', MatchesQueueSchema);

function mongoDocumentToDomain(mongoDocument: MongoMatchesQueue): MatchesQueue {
  return new MatchesQueue({
    tournamentId: TournamentId.from(mongoDocument.tournamentId),
    queuedMatches: [
      ...mongoDocument.queue.map(
        (match) =>
          new QueuedMatch({
            matchNumber: match.matchNumber,
            team1Id: TeamId.from(match.team1Id),
            team2Id: TeamId.from(match.team2Id),
          }),
      ),
    ],
  });
}
