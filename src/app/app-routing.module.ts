import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RetroComponent } from './retro/retro.component';
import { ActionComponent } from './action/action.component';

import { AuthGuard } from './_helpers';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'main', component: MainComponent },
  { path: 'retro', component: RetroComponent },
  { path: 'action', component: ActionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}