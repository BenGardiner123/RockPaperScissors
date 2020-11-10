import { Component, OnInit } from '@angular/core';
import { RockPaperScissorService } from 'src/app/rock-paper-scissor.service';


@Component({
  selector: 'app-rps-selection',
  templateUrl: './rps-selection.component.html',
  styleUrls: ['./rps-selection.component.css']
})
export class RpsSelectionComponent implements OnInit {

 public rockSelected: boolean;
 public paperSelected: boolean;
 public scissorsSelected: boolean;
 


  constructor(private rockPaperScissorService: RockPaperScissorService) { 
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
    if(this.rockPaperScissorService.username == null)
    {
      alert("Please enter a username before making a selection");
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
