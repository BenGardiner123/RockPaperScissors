import { Component, OnInit } from '@angular/core';
import { RockPaperScissorService } from 'src/app/rock-paper-scissor.service';

@Component({
  selector: 'app-rps-display-result',
  templateUrl: './rps-display-result.component.html',
  styleUrls: ['./rps-display-result.component.css']
})
export class RpsDisplayResultComponent implements OnInit {

  constructor(public rockPaperScissorsService: RockPaperScissorService) { }

  ngOnInit(): void {
    this.rockPaperScissorsService.selection;
  }

}
