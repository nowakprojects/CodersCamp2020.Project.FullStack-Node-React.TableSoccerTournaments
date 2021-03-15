import { DoublesTournament } from '../../../../doubles-tournament/core/domain/DoublesTournament';
import { TournamentTree } from '../../../core/domain/TournamentTree';
import { TeamId } from '../../../../doubles-tournament/core/domain/TeamId';
import { TournamentTreeRepository } from '../../../core/application/TournamentTreeRepository';
import { FightingTeamsGroupId } from '../../../core/domain/FightingTeamsGroupId';
import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { FightingTeamsGroup } from '../../../core/domain/FightingTeamsGroup';
import { TournamentTeam } from '../../../core/domain/TournamentTeam';
import { TournamentTeamId } from '../../../core/domain/TournamentTeamId';

export class MongoTournamentTreeRepository implements TournamentTreeRepository {
  async getTournamentTreeById(tournamentId: string): Promise<TournamentTree | undefined> {
    const mongoFindResult = await MongoTournamentTree.findById(tournamentId);
    return mongoFindResult ? mongoDocumentToDomain(mongoFindResult) : undefined;
  }

  async save(tournamentTree: TournamentTree): Promise<void> {
    await MongoTournamentTree.findByIdAndUpdate(
      { _id: tournamentTree.tournamentId },

      {
        _id: tournamentTree.tournamentId,
        tournamentTeams: tournamentTree.tournamentTeams.map((team) => ({
          teamId: team.teamId.raw,
        })),
        tournamentTreeArray: tournamentTree.tournamentTreeArray.map((item) => ({
          fightingTeamsGroupId: item.fightingTeamsGroupId.raw,
          firstTeam: item.firstTeam?.teamId.raw,
          secondTeam: item.secondTeam?.teamId.raw,
          fightingTeamsGroupLevel: item.fightingTeamsGroupLevel,
          nextMatchId: item.nextMatchId?.raw,
        })),
      },
      { upsert: true, useFindAndModify: true },
    );
  }

  findByTournamentTreeId(tournamentTreeId: string): Promise<TournamentTree | undefined> {
    return Promise.resolve(undefined);
  }
}

type MongoTournamentTreeModel = {
  readonly _id: string;
  readonly tournamentTeams: { teamId: string }[];
  readonly tournamentTreeArray: [
    {
      fightingTeamsGroupId: string;
      firstTeam: string | undefined;
      secondTeam: string | undefined;
      fightingTeamsGroupLevel: number;
      nextMatchId: string | undefined;
    },
  ];
} & mongoose.Document;

const TournamentTreeSchema = new mongoose.Schema({
  _id: Schema.Types.String,
  tournamentTeams: [{ teamId: Schema.Types.String }],
  tournamentTreeArray: [
    {
      fightingTeamsGroupId: Schema.Types.String,
      firstTeam: Schema.Types.String,
      secondTeam: Schema.Types.String,
      fightingTeamsGroupLevel: Schema.Types.Number,
      nextMatchId: Schema.Types.String,
    },
  ],
});

const MongoTournamentTree = mongoose.model<MongoTournamentTreeModel>('TournamentTree', TournamentTreeSchema);

function mongoDocumentToDomain(mongoDocument: MongoTournamentTreeModel): TournamentTree {
  const returnedObject = {
    tournamentId: mongoDocument._id,
    tournamentTeams: mongoDocument.tournamentTeams.map((team) => new TournamentTeam({ teamId: TournamentTeamId.from(team.teamId) })),
    tournamentTreeArray: mongoDocument.tournamentTreeArray.map((item) => ({
      fightingTeamsGroupId: FightingTeamsGroupId.from(item.fightingTeamsGroupId),
      firstTeam: item.firstTeam ? new TournamentTeam({ teamId: TournamentTeamId.from(item.firstTeam) }) : undefined,
      secondTeam: item.secondTeam ? new TournamentTeam({ teamId: TournamentTeamId.from(item.secondTeam) }) : undefined,
      fightingTeamsGroupLevel: item.fightingTeamsGroupLevel,
      nextMatchId: item.nextMatchId ? FightingTeamsGroupId.from(item.nextMatchId) : undefined,
    })),
  };

  return TournamentTree.setTournamentTreeFromDataBase(returnedObject);
}
