import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedUser : User;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    if (this.authenticationService.currentUserValue.token != null) {
      this.loggedUser = this.authenticationService.currentUserValue;
    } else {
      
    }
  }

}
