import { Component, OnInit } from '@angular/core';
import { RockPaperScissorService } from 'src/app/rock-paper-scissor.service';
import { RoundService } from 'src/app/round.service';

@Component({
  selector: 'app-rps-selection',
  templateUrl: './rps-selection.component.html',
  styleUrls: ['./rps-selection.component.css']
})
export class RpsSelectionComponent implements OnInit {

 public rockSelected: boolean;
 public paperSelected: boolean;
 public scissorsSelected: boolean;
 public roundService: RoundService;


  constructor(private rockPaperScissorService: RockPaperScissorService, roundService: RoundService) { 
    this.rockSelected = false;
    this.paperSelected = false;
    this.scissorsSelected = false;
   
  }

  ngOnInit(): void {

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
    if(this.roundService.username == null)
    {
      alert("Please enter a username before makign asselection");
      return;
    }
    else{
      if (this.rockSelected){
        this.rockPaperScissorService.commitSelection("Rock");
      }
      else if(this.paperSelected){
        this.rockPaperScissorService.commitSelection("Paper");
      }
      else if(this.scissorsSelected){
        this.rockPaperScissorService.commitSelection("Scissors");
    }
  
  }

}
  
}
