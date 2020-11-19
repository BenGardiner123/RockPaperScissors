import { Round } from './../../models/round';
import { Component, Input, OnInit } from '@angular/core';
import { RockPaperScissorService } from 'src/app/rock-paper-scissor.service';
import { Router } from '@angular/router';
import { GameResultService } from 'src/app/game-result.service';


@Component({
  selector: 'app-rps-selection',
  templateUrl: './rps-selection.component.html',
  styleUrls: ['./rps-selection.component.css']
})
export class RpsSelectionComponent implements OnInit {



 public rockSelected: boolean;
 public paperSelected: boolean;
 public scissorsSelected: boolean;
 public roundCounter: number;
 public roundLimit: number;
  public rockPaperScissorService: RockPaperScissorService;
 


  constructor(rockPaperScissorService: RockPaperScissorService, private router: Router, private gameResultService: GameResultService) { 
    this.rockSelected = false;
    this.paperSelected = false;
    this.scissorsSelected = false;
    this.rockPaperScissorService = rockPaperScissorService;
   
  }

  ngOnInit(): void {
    this.rockPaperScissorService.startGame()
  }

  chooseThis(option: "Rock" | "Paper" | "Scissors"){
    if (option == "Rock"){
      this.rockSelected = !this.rockSelected;
      // need to add the logic to turn off the other buttons here - currently i can select multiple choices.
    }
    else if(option == "Paper")
    {
      this.paperSelected = !this.paperSelected;
    }
    else if(option == "Scissors")
    {
      this.scissorsSelected = !this.scissorsSelected;
    }
  }

  makeSelection(){
    if(this.rockPaperScissorService.username == null)
    {
      alert("Please enter a username before making a selection");
      return;
    }
    else{
      if (this.rockSelected){
        this.rockPaperScissorService.commitSelection("Rock");
        if(this.rockPaperScissorService.roundCounter == this.rockPaperScissorService.roundLimit){
          this.gameResultService.getGameResult();
        }
        // this.roundCounter++;
      }
      else if(this.paperSelected){
        this.rockPaperScissorService.commitSelection("Paper");
        if(this.rockPaperScissorService.roundCounter == this.rockPaperScissorService.roundLimit){
          this.gameResultService.getGameResult();
        }
        // this.roundCounter++;
      }
      else if(this.scissorsSelected){
        this.rockPaperScissorService.commitSelection("Scissors");
        if(this.rockPaperScissorService.roundCounter == this.rockPaperScissorService.roundLimit){
          this.gameResultService.getGameResult();
        }
        // this.roundCounter++;
    }
  
  }

}
  
}
