import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { userSelection } from './userSelection';
import { serverResponse } from './serverResonse';


@Injectable({
  providedIn: 'root'
})

export class RockPaperScissorService {

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

  constructor(private router: Router, private httpClient: HttpClient) {
    this.httpClient = httpClient;
   }


  commitSelection(option: "Rock" | "Paper" | "Scissors"){
    let request = this.httpClient.post<serverResponse>("http://localhost:5000/rockPaperScissors/",
    {
      playerChoice: option,
    });
    request.subscribe((response) => {
    //this stores the selection being pushed over from the compnent into the variable above
    this._selection = response.playerChoice;
    this.AiSelection = response.cpuChoice;
    this._outcome = response.result;
    this.router.navigateByUrl("/result");
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
