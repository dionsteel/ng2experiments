import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { RelativeGridComponent } from './relative-grid/relative-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    RelativeGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  exports: [ MaterialModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
