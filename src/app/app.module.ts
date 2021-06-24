import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MainComponent } from './main/main.component';
import { ActionComponent } from './action/action.component';
import { RetroComponent } from './retro/retro.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, MainComponent, ActionComponent, RetroComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
