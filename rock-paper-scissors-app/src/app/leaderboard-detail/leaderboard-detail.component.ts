import { Component, Input, OnInit } from '@angular/core';
import { LeaderBoardService } from '../leader-board.service';
import {Leaderboard} from '../models/leaderboard'

@Component({
  selector: 'app-leaderboard-detail',
  templateUrl: './leaderboard-detail.component.html',
  styleUrls: ['./leaderboard-detail.component.css']
})
export class LeaderboardDetailComponent implements OnInit {

  @Input()
  leaderboard: Leaderboard;

  public leaderboardService: LeaderBoardService;

  constructor(leaderboardService: LeaderBoardService, ) { }

  ngOnInit(): void {

  }

  // this is where the method to get the leaderboard is - this goes to the rps-leaderboard component
  // something like
  showLeaderboard(){
    this.leaderboardService.getLeaderboard();
  }
}
