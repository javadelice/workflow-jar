import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { C3Component } from './c3/c3.component';
import { C1Component } from './c1/c1.component';


@NgModule({
  declarations: [
    AppComponent,

    C3Component
    C1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
