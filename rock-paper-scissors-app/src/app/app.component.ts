import { RockPaperScissorService } from 'src/app/rock-paper-scissor.service';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private rockPaperScissorService: RockPaperScissorService){
 
  }
  
  onKeyUp(value: string){
    this.rockPaperScissorService.username = value;
  }
  
}
