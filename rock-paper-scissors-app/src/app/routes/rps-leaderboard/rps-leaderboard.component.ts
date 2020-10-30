import { Component, Input, OnInit } from '@angular/core';
import { LeaderBoardService } from 'src/app/leader-board.service';
import { Leaderboard } from 'src/app/models/leaderboard';



@Component({
  selector: 'app-rps-leaderboard',
  templateUrl: './rps-leaderboard.component.html',
  styleUrls: ['./rps-leaderboard.component.css']
})
export class RpsLeaderboardComponent implements OnInit {



  public leaderboardService: LeaderBoardService;

  constructor(leaderboardService: LeaderBoardService) { 
    this.leaderboardService = leaderboardService;
    this.showLeaderboard();
  }

  ngOnInit(): void {
    
  }

  showLeaderboard(){
    this.leaderboardService.getLeaderboard();
  }

}
