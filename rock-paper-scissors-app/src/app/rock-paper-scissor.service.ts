import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { serverResponse } from './models/serverResonse';
import { Round, RoundCheckRespone } from './models/round';



@Injectable({
  providedIn: 'root'
})

export class RockPaperScissorService {

  private _StartDateTime: Date;
  private _roundCounter: number | null;
  private _roundLimit: number | null;
  public username: string | null;
  private _AiSelection: string | null;
  private _selection: string | null;
  private _outcome: string | null;
 
  get startDateTime(){
    return this._StartDateTime;
  }

  get roundCounter(){
    return this._roundCounter;
  }
  
  get roundLimit(){
    return this._roundLimit;
  }

  get aiselection(){
    return this._AiSelection;
  }

  get selection(){
    return this._selection;
  }

  get outcome(){
    return this._outcome;
  }

 
  constructor(private router: Router, private httpClient: HttpClient) {
    this.httpClient = httpClient;
   }

   commitRoundSelection(roundNum: '1' | '3' | '5'){
    var specificNewGameTime = new Date();
    this._StartDateTime = specificNewGameTime;
    this._roundLimit = parseInt(roundNum);
    this._roundCounter = 0;

  }

  startGame(){
    let request = this.httpClient.post<RoundCheckRespone>("http://localhost:5000/rockPaperScissors/NewGame",
    {
      // this sends all the information neeed to start the game
      username: this.username, 
      roundLimit: this.roundLimit, 
      DateTimeStarted: this.startDateTime, 
      currentRound: this.roundCounter
    });
    request.subscribe((response) => {
      //console loggin below to see what gets sent for my own understanding
      //i
      console.log(response);
      this.username = response.username
      this._roundLimit = response.roundLimit
      this._roundCounter = response.currentRound
      // this._StartDateTime = response.DateTimeStarted
      this.router.navigateByUrl("/Selection");
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


    commitSelection(option: "Rock" | "Paper" | "Scissors"){
    this._roundCounter++;
    let request = this.httpClient.post<serverResponse>("http://localhost:5000/rockPaperScissors/Rounds",
    {
      username: this.username, 
      playerChoice: option,
      roundLimit: this.roundLimit, 
      roundCounter: this.roundCounter,
      DateTimeStarted: this.startDateTime
    });
    request.subscribe((response) => {
    //this stores the selection being pushed over from the compnent into the variable above
    console.log(response);
    this.username = response.username;
    this._StartDateTime = response.dateTimeStarted;
  
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
