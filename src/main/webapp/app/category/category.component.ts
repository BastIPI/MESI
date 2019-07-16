import { Component, OnInit } from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import { CategoryService } from './category.service';
import {Category} from "./category.model";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categorys: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService
      .getAll()
      .subscribe(
        (res: HttpResponse<Category[]>) => this.onSuccess(res.body, res.headers),
        (res: HttpResponse<any>) => this.onError(res.body));
  }

  private onSuccess(data, headers) {
    this.categorys = data;
  }

  private onError(error) {
    //this.alertService.error(error.error, error.message, null);
  }
}
