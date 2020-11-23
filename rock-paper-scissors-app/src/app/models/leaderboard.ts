export interface Leaderboard
{
    username: string | null,
    winRatio: number,
    turnsPlayed: number;
    lastFiveOutcomes: string | null;
}

export interface LeaderboardEnvelope {
    leaderboard: Leaderboard[];
}

