import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameResultService } from '../game-result.service';
import { RoundEnvelope } from '../models/round';
import { serverResponse } from '../models/serverResonse';
import { RockPaperScissorService } from '../rock-paper-scissor.service';

@Component({
  selector: 'app-rps-result-detail',
  templateUrl: './rps-result-detail.component.html',
  styleUrls: ['./rps-result-detail.component.css']
})
export class RpsResultDetailComponent implements OnInit {

  @Input()
  results: serverResponse;

  public aiBackground: string = "";
  public userBackground: string = "";

  constructor(private gameResultService: GameResultService , private router: Router, private httpClient: HttpClient) { 
    // need to implement the function here that makes the call to the webapi so on load it gets the info
    // this.rockPaperScissorsService = rockPaperScissorsService;
  
  }

  ngOnInit(): void {
    this.aiBackgroundSetter();
    this.userBackgroundSetter();
  }

  // showSingleRound(){
  //   this.gameResultService.getGameResult();
  // }

  aiBackgroundSetter(){
    if (this.results.cpuChoice == "Rock")
    {
      this.aiBackground = "https://i.ibb.co/VqKy2hT/rock.png";
    }
    if (this.results.cpuChoice == "Paper")
    {
      this.aiBackground = "https://i.ibb.co/zXMN3xJ/paper.png";
    }
    else if (this.results.cpuChoice == "Scissors")
    {
      this.aiBackground = "https://i.ibb.co/BPxfRJD/scissors1.png";
    }
  }

    userBackgroundSetter(){
      if (this.results.playerChoice == "Rock")
    {
      this.userBackground = "https://i.ibb.co/VqKy2hT/rock.png";
    }
    if (this.results.playerChoice == "Paper")
    {
      this.userBackground = "https://i.ibb.co/zXMN3xJ/paper.png";
    }
    else if (this.results.playerChoice == "Scissors")
    {
      this.userBackground = "https://i.ibb.co/BPxfRJD/scissors1.png";
    }
    
  }


}
