export interface serverResponse {
    username: string,
    playerChoice: string,
    cpuChoice: string,
    result: string,
    roundCounter: number,
    roundLimit: number,
    dateTimeStarted: Date;
 }

 export interface insertDBResponse {
   success: string;
 }


 