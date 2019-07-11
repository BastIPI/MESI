import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login.component';
import { RegisterComponent } from './authentication/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { LevelComponent } from './level/level.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
      path: 'home',
      component: HomeComponent,
      data: {
        authorities: ['ROLE_ADMIN']
      },
      canActivate: [AuthGuard] },
  { 
      path: 'levels',
      component: LevelComponent,
      data: {
        authorities: ['ROLE_USER']
      },
      canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [
	RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
