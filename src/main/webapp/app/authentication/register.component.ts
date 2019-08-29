import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user/user.model';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registered : boolean = false;
  loggedUser: User;
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
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loggedUser = this.authenticationService.currentUserValue;
    if (this.loggedUser) {
        // Si on est connecté retour à l'accueil
        // (ne devrait jamais arriver)
        this.router.navigateByUrl(this.route.snapshot.queryParams['returnUrl'] || '/');
    }
  }

  register() {
    //console.log('register');
    //console.log("User : " + this.registerForm.get(['userName']).value);
    //console.log("pwd : " + this.registerForm.get(['password']).value);
    //console.log("first : " + this.registerForm.get(['firstName']).value);
    //console.log("last : " + this.registerForm.get(['lastName']).value);
    //console.log("email : " + this.registerForm.get(['email']).value);
    const user = new User();
    user.userName = this.registerForm.get(['userName']).value;
    user.password = this.registerForm.get(['password']).value;
    user.firstName = this.registerForm.get(['firstName']).value;
    user.lastName = this.registerForm.get(['lastName']).value;
    user.email = this.registerForm.get(['email']).value;

    this.authenticationService.register(user).subscribe(
      response => {
        this.registered = true;
        this.router.navigateByUrl(this.route.snapshot.queryParams['returnUrl'] || '/');
        console.log("User créé");
      },
      response => {
        console.log("Error : " + response);
        //this.success = true;
      }
    );
  }

}
