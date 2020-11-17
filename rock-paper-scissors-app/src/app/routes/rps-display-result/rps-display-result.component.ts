import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameResultService } from 'src/app/game-result.service';
import { RoundEnvelope } from 'src/app/models/round';
import { RockPaperScissorService } from 'src/app/rock-paper-scissor.service';

@Component({
  selector: 'app-rps-display-result',
  templateUrl: './rps-display-result.component.html',
  styleUrls: ['./rps-display-result.component.css']
})


export class RpsDisplayResultComponent implements OnInit {
  
  public rounds: RoundEnvelope;
  public gameResultService: GameResultService

  constructor(gameResultService: GameResultService, private router: Router, private httpClient: HttpClient) { 
    this.gameResultService = gameResultService;
    this.showGameResult();
  }

  ngOnInit(): void {
    
  }

  showGameResult(){
    this.gameResultService.getGameResult();
  }



}
