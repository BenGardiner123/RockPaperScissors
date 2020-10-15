import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RpsDisplayResultComponent } from './routes/rps-display-result/rps-display-result.component';
import { RpsSelectionComponent } from './routes/rps-selection/rps-selection.component';

const routes: Routes = [
  {path: 'selection', component: RpsSelectionComponent},
  {path: 'result', component: RpsDisplayResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
