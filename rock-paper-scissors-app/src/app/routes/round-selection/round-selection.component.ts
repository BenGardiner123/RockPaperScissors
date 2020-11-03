import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-selection',
  templateUrl: './round-selection.component.html',
  styleUrls: ['./round-selection.component.css']
})
export class RoundSelectionComponent implements OnInit {

  public oneSelected: boolean;
  public threeSelected: boolean;
  public fiveSelected: boolean;

  constructor() {
    this.oneSelected = false;
    this.threeSelected = false;
    this.fiveSelected = false;
   }

  ngOnInit(): void {
  }


  chooseThisRound(option: '1'|'3'|'5'){
    if (option == '1'){
      this.oneSelected = !this.oneSelected;
  
    }
    else if(option == '3')
    {
      this.threeSelected = !this.threeSelected;
    }
    else if(option == '5')
    {
      this.fiveSelected = !this.fiveSelected;
    }

  }

  makeRoundSelection(){
    // this is where the info from the selection box is transferred to the service.
    


  }
}


