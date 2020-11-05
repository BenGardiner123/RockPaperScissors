import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoundSelectionComponent } from './routes/round-selection/round-selection.component';
import { RpsDisplayResultComponent } from './routes/rps-display-result/rps-display-result.component';
import { RpsLeaderboardComponent } from './routes/rps-leaderboard/rps-leaderboard.component';
import { RpsSelectionComponent } from './routes/rps-selection/rps-selection.component';

const routes: Routes = [
  {path: "Selection", component: RpsSelectionComponent},
  {path: "Result", component: RpsDisplayResultComponent},
  {path: "Leaderboard", component: RpsLeaderboardComponent},
  {path: "Rounds", component: RoundSelectionComponent},


  {path: "**", redirectTo: "Rounds"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
