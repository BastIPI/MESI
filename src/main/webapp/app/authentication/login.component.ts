import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registered : boolean = false;
  loginForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[_.@A-Za-z0-9-]*$')]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
  });

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    const userName = this.loginForm.get(['userName']).value;
    const password = this.loginForm.get(['password']).value;

    this.authenticationService.login(userName, password).subscribe(
      response => {
        this.registered = true;
      },
      response => {
        console.log("Error : " + response);
        //this.success = true;
      }
    );
  }
}
