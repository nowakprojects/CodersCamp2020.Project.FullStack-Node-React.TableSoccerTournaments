export type MatchListItem = {
    onClickTeam: () => void,
    matchNumber: number | undefined,
    level: number | undefined,
    matchStatus: string | undefined
    team1: {
        readonly player1: string | undefined;
        readonly player2: string | undefined;
        readonly teamId: number | string | undefined;
    },
    team2: {
        readonly player1: string | undefined;
        readonly player2: string | undefined;
        readonly teamId: string | undefined;
    }
};