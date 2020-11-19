import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoundEnvelope } from './models/round';
import { resultEnvelope } from './models/serverResonse';
import { RockPaperScissorService } from './rock-paper-scissor.service';

@Injectable({
  providedIn: 'root'
})
export class GameResultService {

  // game outcome will tally the results from all the rounds and decide if you won
  public gameOutcome: string | null;
  public results: resultEnvelope;
  public rockPaperScissors: RockPaperScissorService;

  

  constructor(private router: Router, private httpClient: HttpClient, rockPaperScissorsService: RockPaperScissorService) {
    this.httpClient = httpClient;
    this.rockPaperScissors = rockPaperScissorsService;
  
   }




// change to post request
  getGameResult(){
    let request = this.httpClient.post<resultEnvelope>("http://localhost:5000/rockPaperScissors/GameResult",
    {
      Username: this.rockPaperScissors.username,
      dateTimeStarted: this.rockPaperScissors.startDateTime,
    });
    request.subscribe((response) => {
    //this stores the selection being pushed over from the compnent into the variable above
    this.results = response;
    console.log(response);
    console.log(this.results);
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
