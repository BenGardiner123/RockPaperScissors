export interface Round {
    username: string;
    playerChoice: string;
    roundLimit: number;
    roundCounter: number;
    DateTimeStarted: Date;
    
 }

 export interface RoundEnvelope {
    rounds: Round[];
 }