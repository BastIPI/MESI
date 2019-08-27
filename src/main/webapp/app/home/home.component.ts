import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../user/user.model';
import { LevelService } from '../level/level.service';
import { Level } from '../level/level.model';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedUser : User;
  levels: Level[];
  menuExpended: boolean;
  level: Level;

  constructor(private authenticationService: AuthenticationService, 
    private levelService: LevelService,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.levelService.getLevels().subscribe(result => {
      this.levels = result;
    })
  }
}
