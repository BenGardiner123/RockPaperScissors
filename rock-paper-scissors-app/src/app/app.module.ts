import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RpsSelectionComponent } from './routes/rps-selection/rps-selection.component';
import { RpsDisplayResultComponent } from './routes/rps-display-result/rps-display-result.component';
import { HttpClientModule } from '@angular/common/http';
import { RpsLeaderboardComponent } from './routes/rps-leaderboard/rps-leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RpsSelectionComponent,
    RpsDisplayResultComponent,
    RpsLeaderboardComponent
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
