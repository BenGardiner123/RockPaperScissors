import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RpsSelectionComponent } from './routes/rps-selection/rps-selection.component';
import { RpsDisplayResultComponent } from './routes/rps-display-result/rps-display-result.component';

@NgModule({
  declarations: [
    AppComponent,
    RpsSelectionComponent,
    RpsDisplayResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
