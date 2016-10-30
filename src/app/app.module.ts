import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapViewComponent } from './map-view/map-view.component';

import { CyclistService } from './cyclist.service';

@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CyclistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
