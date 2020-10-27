import { Component, OnInit } from '@angular/core';
import { LeaderBoardService } from 'src/app/leader-board.service';

@Component({
  selector: 'app-rps-leaderboard',
  templateUrl: './rps-leaderboard.component.html',
  styleUrls: ['./rps-leaderboard.component.css']
})
export class RpsLeaderboardComponent implements OnInit {

  constructor( private leaderboardService: LeaderBoardService) { }

  ngOnInit(): void {
    // i think should be soemthing lijke this so on initilisation it makes the http get and gets the leaderboard
    /* this.leaderboardService.getLeaders().subscribe(response => {
      this.singleLeader = response */
  }

}
