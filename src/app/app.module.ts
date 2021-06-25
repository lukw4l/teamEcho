import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { appRoutingModule } from './app.routing';

@NgModule({
  imports: [BrowserModule, FormsModule, appRoutingModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    RegisterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
