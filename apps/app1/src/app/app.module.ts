import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from 'libs/header/src/index'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
