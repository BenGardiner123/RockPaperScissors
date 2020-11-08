import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoundEnvelope } from './models/round';

import { RockPaperScissorService } from './rock-paper-scissor.service';

@Injectable({
  providedIn: 'root'
})

export class RoundService {

  private _StartDateTime: Date;
  public roundCounter: number
  public roundLimit: string

  get StartDateTime(){
    return this._StartDateTime;
  }

  constructor() {

   }

  commitSelection(roundNum: '1' | '3' | '5'){
    var specificNewGameTime = new Date();
    this._StartDateTime = specificNewGameTime;
    this.roundLimit = roundNum;
  }



}
