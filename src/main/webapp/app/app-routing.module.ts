import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login.component';
import { RegisterComponent } from './authentication/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { LevelComponent } from './level/level.component';
import { LevelMechanicComponent } from './level_mechanic/level_mechanic.component';
import { LevelMechanicFormComponent } from './level_mechanic/level_mechanic_form.component';
import { ElementImageComponent } from './element_image/element_image.component';
import { LinkUrlComponent } from './link-url/link-url.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
      path: 'home',
      component: HomeComponent,
      data: {
        authorities: ['ROLE_USER']
      },
      canActivate: [AuthGuard]
  },
  { 
      path: 'levelmechanic/:id',
      component: LevelMechanicComponent,
      data: {
        authorities: ['ROLE_USER']
      },
      canActivate: [AuthGuard]
  },
  { 
      path: 'levelmechanicform',
      component: LevelMechanicFormComponent,
      data: {
        authorities: ['ROLE_USER']
      },
      canActivate: [AuthGuard]
  },
  { 
      path: 'levels',
      component: LevelComponent,
      data: {
        authorities: ['ROLE_USER']
      },
      canActivate: [AuthGuard]
  },
  { 
      path: 'elementimage',
      component: ElementImageComponent,
      data: {
        authorities: ['ROLE_ADMIN']
      },
      canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'link_url', component: LinkUrlComponent }
];

@NgModule({
  imports: [
	RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
