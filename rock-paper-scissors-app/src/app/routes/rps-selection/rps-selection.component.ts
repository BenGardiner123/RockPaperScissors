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

  chooseThis(option: 'rock' | 'paper' | 'scissors'){
    if (option == 'rock'){
      this.rockSelected = !this.rockSelected;
    }
    else if(option == 'paper')
    {
      this.paperSelected = !this.paperSelected;
    }
    else if(option == 'scissors')
    {
      this.scissorsSelected = !this.scissorsSelected;
    }
  }

  makeSelection(){
    if (this.rockSelected){
      this.rockPaperScissorService.commitSelection('rock');
    }
    else if(this.paperSelected){
      this.rockPaperScissorService.commitSelection('paper');
    }
    else if(this.rockSelected){
      this.rockPaperScissorService.commitSelection('rock');
  }

}
  
}
