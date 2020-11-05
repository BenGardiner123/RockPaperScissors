import { Component } from '@angular/core';
import { RockPaperScissorService } from './rock-paper-scissor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private rockPaperScissorsService: RockPaperScissorService){
 
  }
  
  onKeyUp(value: string){
    this.rockPaperScissorsService.userName = value;
  }
  
}
