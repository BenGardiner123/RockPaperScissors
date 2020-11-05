import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoundEnvelope } from './models/round';

import { RockPaperScissorService } from './rock-paper-scissor.service';

@Injectable({
  providedIn: 'root'
})

export class RoundService {

  
  public roundCounter: number
  public roundLimit: string

  constructor() {

   }

  commitSelection(roundNum: '1' | '3' | '5'){
    this.roundLimit = roundNum;
  }



}
