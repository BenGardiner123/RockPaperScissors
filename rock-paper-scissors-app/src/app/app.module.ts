import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectionPickerComponent } from './selection-picker/selection-picker.component';
import { SelectionDisplayComponent } from './selection-display/selection-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectionPickerComponent,
    SelectionDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
