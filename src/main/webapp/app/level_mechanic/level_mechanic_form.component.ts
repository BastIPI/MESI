import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
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
import { MatSelectionList } from '@angular/material';
import { faArrowUp, faArrowDown, faTrash} from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-level-mechanic-form',
  templateUrl: './level_mechanic_form.component.html',
  styleUrls: ['./level_mechanic_form.component.css']
})

export class LevelMechanicFormComponent implements OnInit, AfterViewInit {

  @ViewChild('elements', {static: false}) selectElements: MatSelectionList; 

  categories: Category[];
  quantity: number = 1;
  categoryId: number;
  elementImages: ElementImage[];
  levelElement: LevelElement = new LevelElement();
  levelMechanic: LevelMechanic = new LevelMechanic();
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faTrash = faTrash;
  
  constructor(
    private levelMechanicService: LevelMechanicService,
    private authenticationService: AuthenticationService,
    private elementImageService: ElementImageService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.levelMechanic.split = false;
    this.levelMechanic.levelElements = [];
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

  ngAfterViewInit() {
    this.draw('containerToFind');
    this.draw('containerBase');
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
    this.levelElement.order = this.levelMechanic.levelElements.length;
    this.levelMechanic.levelElements.push(this.levelElement);

    this.drawElement(this.levelElement);

    this.levelElement = new LevelElement();
    this.quantity = 1;
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

  elementsDelete() {
    if (this.selectElements.selectedOptions.selected.length > 0) {
      for (var i = this.selectElements.selectedOptions.selected.length - 1; i >= 0; i--) {
        this.levelMechanic.levelElements.splice(this.selectElements.selectedOptions.selected[i].value, 1);
      }
    }
    this.draw("elements");
  }

  elementsUp() {
    if (this.selectElements.selectedOptions.selected.length > 0) {
      for (var i = 0; i < this.selectElements.selectedOptions.selected.length; i++) {
        let indexElement = this.selectElements.selectedOptions.selected[i].value
        if(indexElement > 0 && !(i > 0 && this.selectElements.selectedOptions.selected[i-1].value == indexElement - 1)) {
          let elementTemp = this.levelMechanic.levelElements[indexElement - 1];
          this.levelMechanic.levelElements[indexElement - 1] = this.levelMechanic.levelElements[indexElement];
          this.levelMechanic.levelElements[indexElement] = elementTemp;
        }
      }
    }
    this.draw("elements");
  }

  elementsDown() {
    if (this.selectElements.selectedOptions.selected.length > 0) {
      for (var i = this.selectElements.selectedOptions.selected.length - 1; i >= 0; i--) {
        let indexElement = this.selectElements.selectedOptions.selected[i].value
        if(indexElement < this.levelMechanic.levelElements.length - 1 && !(i < this.selectElements.selectedOptions.selected.length -1 && this.selectElements.selectedOptions.selected[i+1].value == indexElement + 1)) {
          let elementTemp = this.levelMechanic.levelElements[indexElement + 1];
          this.levelMechanic.levelElements[indexElement + 1] = this.levelMechanic.levelElements[indexElement];
          this.levelMechanic.levelElements[indexElement] = elementTemp;
        }
      }
    }
    this.draw("elements");
  }

  draw(target: string) {
    switch (target) {
      case "containerBase":
        let containerCssBaseDefault = "position:absolute;top:0;left:0;height:100%;z-index:1;" + (this.levelMechanic.split ? "width:100%;" : "width:50%;");
        document.getElementById("containerBase").style.cssText =
          (this.levelMechanic.containerCssBase ? this.levelMechanic.containerCssBase : "") + containerCssBaseDefault;
        break;
      case "containerToFind":
        let containerCssToFindDefault = "background-color:#f2f2f2;position:absolute;height:100%;z-index:1;top:0;" + (this.levelMechanic.split ? "right:0;width:50%;" : "left:0;width:100%;");
        document.getElementById("containerToFind").style.cssText =
          (this.levelMechanic.containerCssBase ? this.levelMechanic.containerCssBase : "") +
          (this.levelMechanic.containerCssToFind ? this.levelMechanic.containerCssToFind : "") +
          containerCssToFindDefault;
        break;
      case "elements":
        for (let le of this.levelMechanic.levelElements) {
          this.drawElement(le);
        }
        break;
      default:
        break;
    }
  }

  drawElement(le : LevelElement) {

    var elementDim = Math.floor(document.documentElement.clientHeight / 6);
    var cssDefault = "width:" + elementDim + "px;height:" + elementDim + "px;";
    var cssBase = le.cssBase;
    var cssToFind = le.cssToFind;

    var observer = new MutationObserver(function(mutations) {
      if (document.contains(document.getElementById("elementBase" + le.order)) && document.contains(document.getElementById("elementToFind" + le.order))) {
        document.getElementById("elementBase" + le.order).style.cssText = cssDefault + cssBase;
        document.getElementById("elementToFind" + le.order).style.cssText = cssDefault + cssBase + cssToFind;
        observer.disconnect();
       }
   });
    observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
  }

  save() {
    this.levelMechanic.category = this.categories.find(c => c.id == this.categoryId);
    if (this.levelMechanic.dateCreated) {
      this.levelMechanic.dateEdited = new Date();
    } else {
      this.levelMechanic.dateCreated = new Date();
      this.levelMechanic.dateEdited = new Date();
    }
    if (!this.levelMechanic.user) {
      this.levelMechanic.user = this.authenticationService.currentUserValue;
    }
    this.levelMechanic.active = true;

    this.levelMechanicService
      .create(this.levelMechanic)
      .subscribe(response => console.log(response));
  }
}
