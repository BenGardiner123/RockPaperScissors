import { Component } from '@angular/core';
import { RockPaperScissorService } from './rock-paper-scissor.service';
import { RoundService } from './round.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private roundService: RoundService){
 
  }
  
  onKeyUp(value: string){
    this.roundService.username = value;
  }
  
}
