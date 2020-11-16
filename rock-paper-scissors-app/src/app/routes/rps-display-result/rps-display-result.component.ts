import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoundEnvelope } from 'src/app/models/round';
import { RockPaperScissorService } from 'src/app/rock-paper-scissor.service';

@Component({
  selector: 'app-rps-display-result',
  templateUrl: './rps-display-result.component.html',
  styleUrls: ['./rps-display-result.component.css']
})


export class RpsDisplayResultComponent implements OnInit {
  
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

  commitSelection(option: "Rock" | "Paper" | "Scissors"){
    let request = this.httpClient.post<RoundEnvelope>("http://localhost:5000/rockPaperScissors/Rounds",
    {
      
    });
    request.subscribe((response) => {
    //this stores the selection being pushed over from the compnent into the variable above
  

    }, (error) => {
          if(error.status == 401){
            alert("Sorry - you are not authorized to do that")
          }
          if(error.status == 405){
            alert("The method exists but not supported by the target - potentially incorrct formating")
          }
          if(error.status == 404){
            alert("The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.")
          }
          if(error.status == 500){
            alert("It is likely that some undetermined error occured.. internally. Have you tried switching it off and on again? ")
          }

  });

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
