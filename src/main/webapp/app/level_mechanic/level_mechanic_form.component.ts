import { Component, OnInit } from '@angular/core';
import { LevelMechanic } from './level_mechanic.model';
import { HttpResponse } from '@angular/common/http';
import { LevelMechanicService } from './level_mechanic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from '../category/category.model';
import { CategoryService } from '../category/category.service';
import { LevelElement } from './level_element.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ElementImageService } from '../element_image/element_image.service';
import { ElementImage } from '../element_image/element_image.model';

@Component({
  selector: 'app-level-mechanic-form',
  templateUrl: './level_mechanic_form.component.html',
  styleUrls: ['./level_mechanic_form.component.css']
})
export class LevelMechanicFormComponent implements OnInit {
  categories: Category[];
  quantity: number = 1;
  elementImages: ElementImage[];
  levelElement: LevelElement = new LevelElement();
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
    private elementImageService: ElementImageService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.categoryService
      .getAll()
      .subscribe(
        (res: HttpResponse<Category[]>) => this.categories = res.body);
    this.elementImageService
      .getAll()
      .subscribe(
        (res: HttpResponse<ElementImage[]>) => this.elementImages = res.body,
        (res: HttpResponse<any>) => console.log(res.body));
  }

  openImageSelection(content) {
    this.modalService.open(content, {size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log("Closed with: " + result);
    }, (reason) => {
      console.log("Dismissed " + this.getDismissReason(reason));
    });
  }

  selectImage(ei: ElementImage) {
    this.levelElement.elementImage = ei;
  }

  addLevelElement() {
    this.levelMechanic.levelElements.push(this.levelElement);
    this.levelElement = new LevelElement();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
