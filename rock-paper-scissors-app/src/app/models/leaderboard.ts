export interface Leaderboard
{
    username: string | null,
    winRatio: number,
    turnsPlayed: number;
}

export interface LeaderboardEnvelope {
    leaderboards: Leaderboard[];
}

