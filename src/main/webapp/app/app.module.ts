import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatFormFieldModule, 
  MatInputModule, 
  MatButtonModule, 
  MatCardModule, 
  MatIconModule, 
  MatToolbarModule,
  MatSelectModule, 
  MatSliderModule,
  MatListModule, 
  MatTabsModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './authentication/login.component';
import { RegisterComponent } from './authentication/register.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './shared/interceptor/jwt.interceptor';
import { ErrorInterceptor } from './shared/interceptor/error.interceptor';
import { HomeComponent } from './home/home.component';
import { LevelComponent } from './level/level.component';
import { CommentComponent } from './comment/comment.component';
import { CategoryComponent } from './category/category.component';
import { LevelMechanicComponent } from './level_mechanic/level_mechanic.component';
import { LevelMechanicFormComponent } from './level_mechanic/level_mechanic_form.component';
import { ElementImageComponent } from './element_image/element_image.component';
import { LinkUrlComponent } from './link-url/link-url.component';
import { DetailLevelComponent } from './detail-level/detail-level.component';
import { ProfilComponent } from './user/profil/profil.component';

const matModules = [
	MatFormFieldModule,
	MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSelectModule,
  MatListModule,
  MatCardModule,
  MatSliderModule,
  MatTabsModule
];

@NgModule({
  declarations: [
    AppComponent,
	  LoginComponent,
	  RegisterComponent,
	  HomeComponent,
	  LevelComponent,
	  CommentComponent,
    CategoryComponent,
    LevelMechanicComponent,
    LevelMechanicFormComponent,
    ElementImageComponent,
    LinkUrlComponent,
    DetailLevelComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
	  ...matModules
  ],
  exports: [...matModules],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
