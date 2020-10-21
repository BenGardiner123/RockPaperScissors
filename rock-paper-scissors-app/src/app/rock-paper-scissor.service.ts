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


  commitSelection(option: "rock" | "paper" | "scissors"){
    let request = this.httpClient.post<serverResponse>("https://localhost:5001/rockPaperScissors/",
    {
      playerChoice: option,
    });
    request.pipe(delay(3000)).subscribe((response) => {
    //this stores the selection being pushed over from the compnent into the variable above
    this._selection = response.playerChoice;
    this.AiSelection = response.cpuChoice;
    this._outcome = response.result;
    this.router.navigateByUrl("/result");
  })
 }

  





}
