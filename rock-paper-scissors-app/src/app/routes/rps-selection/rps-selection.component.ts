import { Component, OnInit } from '@angular/core';
import { RockPaperScissorService } from 'src/app/rock-paper-scissor.service';

@Component({
  selector: 'app-rps-selection',
  templateUrl: './rps-selection.component.html',
  styleUrls: ['./rps-selection.component.css']
})
export class RpsSelectionComponent implements OnInit {

 public rockSelected = false;
 public paperSelected = false;
 public scissorsSelected = false;


  constructor( private rockPaperScissorService: RockPaperScissorService) { 
    
  }

  ngOnInit(): void {

  }

  chooseThis(option: "Rock" | "Paper" | "Scissors"){
    if (option == "Rock"){
      this.rockSelected = !this.rockSelected;
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
