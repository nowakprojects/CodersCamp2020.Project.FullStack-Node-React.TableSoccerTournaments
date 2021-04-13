import { TournamentName } from './TournamentName';

export class TournamentDetails {
  readonly tournamentId: string;
  readonly tournamentName: TournamentName;

  constructor(props: { tournamentId: string; tournamentName: TournamentName }) {
    this.tournamentId = props.tournamentId;
    this.tournamentName = props.tournamentName;
  }
}

export function addTournamentDetails(command: { tournamentId: string; tournamentName: string }): TournamentDetails {
  if (command.tournamentName.length < 3) {
    throw new Error('Tournament name must have at least 3 characters.');
  }

  return new TournamentDetails({ tournamentId: command.tournamentId, tournamentName: TournamentName.from(command.tournamentName) });
}
