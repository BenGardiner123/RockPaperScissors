import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RockPaperScissorService {

  private selection: 'rock' | 'paper' | 'scissors' | null;

  constructor() { }


  commitSelection(option: 'rock' | 'paper' | 'scissors'){

  }

}
