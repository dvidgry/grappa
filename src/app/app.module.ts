import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GrappaModule } from '@elemental-concept/grappa';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GrappaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
