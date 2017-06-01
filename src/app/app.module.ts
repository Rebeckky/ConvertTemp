import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalculateFahrenheitComponent } from './calculate-fahrenheit.component';
import { CalculateCelsiusComponent } from './calculate-celsius.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculateFahrenheitComponent,
    CalculateCelsiusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
