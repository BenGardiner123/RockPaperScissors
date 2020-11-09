import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoundCheckRespone, RoundEnvelope } from './models/round';

import { RockPaperScissorService } from './rock-paper-scissor.service';

@Injectable({
  providedIn: 'root'
})

export class RoundService {

  public username: string;
  private _StartDateTime: Date;
  public roundCounter: number;
  public roundLimit: number;

  get StartDateTime(){
    return this._StartDateTime;
  }
  

  constructor(private httpClient: HttpClient) {

   }

  commitSelection(roundNum: '1' | '3' | '5'){
    var specificNewGameTime = new Date();
    this._StartDateTime = specificNewGameTime;
    this.roundLimit = parseInt(roundNum);
  }

  startGame(username:string, numRounds: number, startDateTime:Date){
    let request = this.httpClient.post<RoundCheckRespone>("http://localhost:5000/rockPaperScissors/NewGame",
    {
      username: this.username, 
      roundLimit: this.roundLimit, 
      DateTimeStarted: this.StartDateTime,
      // thinking the datetime needs to be created in the round service and then passed aroud fro there.
    });
    request.subscribe((response) => {
      //this stores the selection being pushed over from the compnent into the variable above
      
      

      // if (this.roundService.roundCounter == this.roundService.roundLimit)
      this.router.navigateByUrl("/Result");
      }, (error) => {
            if(error.status == 401){
              alert("Sorry - you are not authorized to do that")
            }
            if(error.status == 405){
              alert("The method exists but not supported by the target - potentially incorrct formating")
            }
            if(error.status == 404){
              alert("The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.")
            }
            if(error.status == 500){
              alert("It is likely that some undetermined error occured.. internally. Have you tried switching it off and on again? ")
            }
  
    });
  }


}
