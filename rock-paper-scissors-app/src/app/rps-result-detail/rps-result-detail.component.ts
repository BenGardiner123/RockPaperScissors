import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoundEnvelope } from '../models/round';
import { RockPaperScissorService } from '../rock-paper-scissor.service';

@Component({
  selector: 'app-rps-result-detail',
  templateUrl: './rps-result-detail.component.html',
  styleUrls: ['./rps-result-detail.component.css']
})
export class RpsResultDetailComponent implements OnInit {

  public rounds: RoundEnvelope;
  

  public aiBackground: string = "";
  public userBackground: string = "";

  constructor(public rockPaperScissorsService: RockPaperScissorService, private router: Router, private httpClient: HttpClient) { 
    // need to implement the function here that makes the call to the webapi so on load it gets the info
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
