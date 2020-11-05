import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { serverResponse } from './models/serverResonse';
import { Round } from './models/round';
import { RoundService } from './round.service';


@Injectable({
  providedIn: 'root'
})

export class RockPaperScissorService {

  public rounds: Round[] = [];

  public userName: string | null;

  private AiSelection: string | null;

  private _selection: string | null;
  
  private _outcome: string | null;

  get selection(){
    return this._selection;
  }

  get aiselection(){
    return this.AiSelection;
  }

  get outcome(){
    return this._outcome;
  }

  get username(){
    return this.userName;
  }


  constructor(private router: Router, private httpClient: HttpClient, private roundService:RoundService) {
    this.httpClient = httpClient;
   }


  commitSelection(option: "Rock" | "Paper" | "Scissors"){
    this.roundService.roundCounter =  this.roundService.roundCounter + 1;

    let request = this.httpClient.post<serverResponse>("http://localhost:5000/rockPaperScissors/",
    {
      username: this.userName, 
      playerChoice: option,
    });
    request.subscribe((response) => {
    //this stores the selection being pushed over from the compnent into the variable above
    this._selection = response.playerChoice;
    this.AiSelection = response.cpuChoice;
    this._outcome = response.result;
    this.userName = response.username;
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
