import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Leaderboard, LeaderboardEnvelope} from './models/leaderboard';
import { RockPaperScissorService } from './rock-paper-scissor.service';

@Injectable({
  providedIn: 'root'
})

export class LeaderBoardService {

  public leaderboards: LeaderboardEnvelope;
  public rockPaperScissorService: RockPaperScissorService;
 

  constructor(private router: Router, private httpClient: HttpClient,  rockPaperScissorsService: RockPaperScissorService) {
    this.httpClient = httpClient;
    this.rockPaperScissorService = rockPaperScissorsService;
   }


 getLeaderboard(){
    let request = this.httpClient.get<LeaderboardEnvelope>("http://localhost:5000/rockPaperScissors/Leaderboard");
    request.subscribe((response) => {
    //this stores the selection being pushed over from the compnent into the variable above
    this.leaderboards = response;
    // console.log(response);
    // console.log(this.leaderboards);
    this.router.navigateByUrl("/Leaderboard");
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
