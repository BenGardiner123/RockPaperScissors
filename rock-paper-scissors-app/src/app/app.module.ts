import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectionPickerComponent } from './selection-picker/selection-picker.component';
import { SelectionDisplayComponent } from './selection-display/selection-display.component';
import { RpsSelectionComponent } from './routes/rps-selection/rps-selection.component';
import { RpsDisplayResultComponent } from './routes/rps-display-result/rps-display-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectionPickerComponent,
    SelectionDisplayComponent,
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
