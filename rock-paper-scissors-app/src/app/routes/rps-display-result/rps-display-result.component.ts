import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RockPaperScissorService } from 'src/app/rock-paper-scissor.service';

@Component({
  selector: 'app-rps-display-result',
  templateUrl: './rps-display-result.component.html',
  styleUrls: ['./rps-display-result.component.css']
})


export class RpsDisplayResultComponent implements OnInit {

  public aiBackground: string = "";
  public userBackground: string = "";

  constructor(public rockPaperScissorsService: RockPaperScissorService, private router: Router) { 
    this.rockPaperScissorsService = rockPaperScissorsService;
    this.aiBackgroundSetter();
    this.userBackgroundSetter();
  }

  ngOnInit(): void {

    
    
    if(this.rockPaperScissorsService.selection == null){
      this.router.navigateByUrl("/selection");
    } 
  }

  aiBackgroundSetter(){
    if (this.rockPaperScissorsService.aiselection == "Rock")
    {
      this.aiBackground = "https://i.ibb.co/VqKy2hT/rock.png";
    }
    if (this.rockPaperScissorsService.aiselection == "Paper")
    {
      this.aiBackground = "https://i.ibb.co/zXMN3xJ/paper.png";
    }
    else if (this.rockPaperScissorsService.aiselection == "Scissors")
    {
      this.aiBackground = "https://i.ibb.co/BPxfRJD/scissors1.png";
    }
  }

    userBackgroundSetter(){
      if (this.rockPaperScissorsService.selection == "Rock")
    {
      this.userBackground = "https://i.ibb.co/VqKy2hT/rock.png";
    }
    if (this.rockPaperScissorsService.selection == "Paper")
    {
      this.userBackground = "https://i.ibb.co/zXMN3xJ/paper.png";
    }
    else if (this.rockPaperScissorsService.selection == "Scissors")
    {
      this.userBackground = "https://i.ibb.co/BPxfRJD/scissors1.png";
    }
    
  }


}
