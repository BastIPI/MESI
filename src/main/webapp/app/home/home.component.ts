import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../user/user.model';
import { LevelService } from '../level/level.service';
import { Level } from '../level/level.model';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/category.model';
import { Router, ActivatedRoute } from '@angular/router';
import { faPlusCircle, faUserNinja, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

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
  selectedLevel: number = 0;
  faPlusCircle=faPlusCircle;
  faUserNinja=faUserNinja;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  menuCollapse: boolean = true;

  constructor(private authenticationService: AuthenticationService, 
    private levelService: LevelService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('id')) {
      this.selectedLevel = +this.route.snapshot.paramMap.get('id');
    }
    this.levelService.getAll().subscribe(result => {
      this.levels = result.body;
    });
    this.categoryService.getAll().subscribe(result => {
      this.categories = result.body;
    });
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
  filterCat(){
    if (this.levels) {
      return this.levels.filter(level => level.category.id == this.categorySelected || this.categorySelected == 0);
    }
  }
}
