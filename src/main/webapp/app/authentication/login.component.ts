import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedUser: User;
  registered : boolean = false;
  hide : true;
  loginForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[_.@A-Za-z0-9-]*$')]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
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

  login() {
    const userName = this.loginForm.get(['userName']).value;
    const password = this.loginForm.get(['password']).value;

    this.authenticationService.login(userName, password).subscribe(
      response => {
        this.registered = true;
        this.router.navigateByUrl(this.route.snapshot.queryParams['returnUrl'] || '/');
        console.log("Connexion réussie !");
      },
      response => {
        console.log("Error : " + response);
        //this.success = true;
      }
    );
  }
}
