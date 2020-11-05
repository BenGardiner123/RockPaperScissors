import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoundService } from 'src/app/round.service';

@Component({
  selector: 'app-round-selection',
  templateUrl: './round-selection.component.html',
  styleUrls: ['./round-selection.component.css']
})
export class RoundSelectionComponent implements OnInit {

  public oneSelected: boolean;
  public threeSelected: boolean;
  public fiveSelected: boolean;
 

  constructor(private router:Router, private roundService: RoundService) {
    this.oneSelected = false;
    this.threeSelected = false;
    this.fiveSelected = false;
   }

  ngOnInit(): void {
  }


  chooseThisRound(option: '1'|'3'|'5'){
    if (option == '1'){
      this.oneSelected = !this.oneSelected;
      this.threeSelected = false;
      this.fiveSelected = false;
    }
    else if(option == '3')
    {
      this.threeSelected = !this.threeSelected;
      this.oneSelected = false;
      this.fiveSelected = false;
    }
    else if(option == '5')
    {
      this.oneSelected = false;
      this.threeSelected = false;
      this.fiveSelected = !this.fiveSelected;
    }

  }

  makeRoundSelection(){
    if (this.oneSelected){
      this.roundService.commitSelection(1);
    }
    else if(this.threeSelected){
      this.roundService.commitSelection(3);
    }
    else if(this.fiveSelected){
      this.roundService.commitSelection(5);
    }
    this.router.navigateByUrl("/selection");

}

}
