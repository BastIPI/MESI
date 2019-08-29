import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user: User;
  changerMdp : boolean = false;
  newPassword: string;
  confirmPassword: string;
  oldPassword: string;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;
  }

  changeMdp(){
    this.changerMdp = true;
  }

  ValiderChangeMdp(){
  if(this.newPassword !== this.confirmPassword){
      alert('Votre nouveau mot de passe et sa confirmation doivent petre identiques.')
    }
    this.changerMdp = false;
  }

}
