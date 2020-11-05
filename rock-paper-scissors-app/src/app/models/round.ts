export interface Round {
    username: string;
    playerChoice: string;
 }

 export interface RoundEnvelope {
    rounds: Round[];
 }