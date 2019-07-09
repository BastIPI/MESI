import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../user/user.model';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registered : boolean = false;
  registerForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[_.@A-Za-z0-9-]*$')]],
    email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    firstName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[_.@A-Za-z0-9-]*$')]],
    lastName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[_.@A-Za-z0-9-]*$')]]
  });

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  register() {
    const user = new User;
    user.userName = this.registerForm.get(['userName']).value;
    user.password = this.registerForm.get(['password']).value;
    user.firstName = this.registerForm.get(['firstName']).value;
    user.lastName = this.registerForm.get(['lastName']).value;
    user.email = this.registerForm.get(['email']).value;

    this.authenticationService.register(user).subscribe(
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
