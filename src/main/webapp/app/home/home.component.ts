import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../user/user.model';
import { LevelService } from '../level/level.service';
import { Level } from '../level/level.model';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/category.model';
import { Router } from '@angular/router';

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
  categories: Category[];
  categorySelected: number = 0;

  constructor(private authenticationService: AuthenticationService, 
    private levelService: LevelService,
    private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.levelService.getLevels().subscribe(result => {
      this.levels = result;
    });
    this.levelService.getAll().subscribe(result => {
      console.log(' level: ' + result);
    });
    this.categoryService.getAll().subscribe(result => {
      console.log(' category ' + result);
      this.categories = result.body;
    });
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
  filterCat(){
    return this.levels.filter(level => level.category.id == this.categorySelected || this.categorySelected == 0);
  }
}
