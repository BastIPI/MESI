import { Component, OnInit } from '@angular/core';
import { LevelMechanic } from './level_mechanic.model';
import { HttpResponse } from '@angular/common/http';
import { LevelMechanicService } from './level_mechanic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from '../category/category.model';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-level-mechanic-form',
  templateUrl: './level_mechanic_form.component.html',
  styleUrls: ['./level_mechanic_form.component.css']
})
export class LevelMechanicFormComponent implements OnInit {
  categories: Category[];
  levelMechanic: LevelMechanic = new LevelMechanic();
  levelMechanicForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[_.@A-Za-z0-9-]*$')]]/*,
    email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    firstName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[_.@A-Za-z0-9-]*$')]],
    lastName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[_.@A-Za-z0-9-]*$')]]*/
  });
  constructor(
    private fb: FormBuilder,
    private levelMechanicService: LevelMechanicService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService
      .getAll()
      .subscribe(
        (res: HttpResponse<Category[]>) => this.categories = res.body);
  }

  private onSuccess(data, headers) {
    this.levelMechanic = data;
  }

  private onError(error) {
    //this.alertService.error(error.error, error.message, null);
  }

}
