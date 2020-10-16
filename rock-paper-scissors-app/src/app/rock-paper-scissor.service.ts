import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class RockPaperScissorService {

  AiChoice: string[] = ['rock', 'paper', 'scissors'];  
  AiSelection: string;

  private _selection: 'rock' | 'paper' | 'scissors' | null;
  

  get selection(){
    return this._selection;

  }
  get aiselection(){
    return this.AiSelection;
  }

  constructor(private router: Router) {
    // https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
    
   }


  commitSelection(option: 'rock' | 'paper' | 'scissors'){
    //the null here will be replaced by the get() request to the endpoint
    of(null).pipe(delay(3000)).subscribe(() => {
    //this stores the selection being pushed over from the compnent into the variable above
    this._selection = option;
    this.AiSelection = this.AiChoice[(Math.random() * this.AiChoice.length) | 0];
    this.router.navigateByUrl("/result");
  })
 }

 

}
