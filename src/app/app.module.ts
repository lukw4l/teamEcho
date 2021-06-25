import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { ActionComponent } from './action/action.component';
import { RetroComponent } from './retro/retro.component';
import { AppRoutingModule } from './app-routing.module';
import { RetroQuestionService } from './retro/retro-question.service';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    MainComponent, 
    ActionComponent, 
    RetroComponent,
    LoginComponent,
    RegisterComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    RetroQuestionService
  ]
})
export class AppModule {}
