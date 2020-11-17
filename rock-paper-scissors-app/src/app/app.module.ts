import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RpsSelectionComponent } from './routes/rps-selection/rps-selection.component';
import { RpsDisplayResultComponent } from './routes/rps-display-result/rps-display-result.component';
import { HttpClientModule } from '@angular/common/http';
import { RpsLeaderboardComponent } from './routes/rps-leaderboard/rps-leaderboard.component';
import { LeaderboardDetailComponent } from './leaderboard-detail/leaderboard-detail.component';
import { RoundSelectionComponent } from './routes/round-selection/round-selection.component';
import { RoundComponent } from './round/round.component';
import { RpsResultDetailComponent } from './rps-result-detail/rps-result-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RpsSelectionComponent,
    RpsDisplayResultComponent,
    RpsLeaderboardComponent,
    LeaderboardDetailComponent,
    RoundSelectionComponent,
    RoundComponent,
    RpsResultDetailComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
