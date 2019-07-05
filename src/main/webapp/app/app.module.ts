import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './authentification/login.component';
import { RegisterComponent } from './authentification/register.component';

const matModules = [
	MatFormFieldModule,
	MatInputModule,
	MatButtonModule
];

@NgModule({
  declarations: [
    AppComponent,
	LoginComponent,
	RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	NgbModule,
	BrowserAnimationsModule,
	...matModules
  ],
  exports: [...matModules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
