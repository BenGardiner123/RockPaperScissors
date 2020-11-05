import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoundEnvelope } from './models/round';

import { RockPaperScissorService } from './rock-paper-scissor.service';

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  public rounds: RoundEnvelope;
  public roundCounter: number;
  public roundLimit: number;

  constructor(private rockPaperScissorService:RockPaperScissorService) { }

  commitSelection(roundNum: 1 | 3 | 5){
    this.roundLimit = roundNum;
  }



}