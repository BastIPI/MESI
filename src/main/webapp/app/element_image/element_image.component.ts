import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementImage } from './element_image.model';
import { FormBuilder, Validators } from '@angular/forms';
import { ElementImageService } from './element_image.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-elementimage',
  templateUrl: './element_image.component.html',
  styleUrls: ['./element_image.component.css']
})
export class ElementImageComponent implements OnInit {
  elementImages: ElementImage[];
  elementImage: ElementImage = new ElementImage();

  constructor(
    private elementImageService: ElementImageService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.loadElementImages();
  }

  loadElementImages() {
    this.elementImageService
      .getAll()
      .subscribe(
        (res: HttpResponse<ElementImage[]>) => this.elementImages = res.body,
        (res: HttpResponse<any>) => console.log(res.body));
  }

  loadImage(event : any, field : String) {
    return new Promise((resolve, reject) => {
      if (event && event.target && event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        if (!/^image\//.test(file.type)) {
          reject(`File was expected to be an image but was found to be ${file.type}`);
        } else {
          if (field == 'base') {
            this.elementImage.baseContentType = file.type;
          } else {
            this.elementImage.resultContentType = file.type;
          }
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result.toString().replace(/^data:(.*,)?/, ''));
          reader.onerror = error => reject(error);
        }
      } else {
        reject(`Base64 data was not set as file could not be extracted from passed parameter: ${event}`);
      }
    }).then((data) => {
      if (field == 'base') {
        this.elementImage.base = data
      } else {
        this.elementImage.result = data
      }
    });
  }


  save() {
    this.elementImageService.create(this.elementImage).subscribe(
      response => {
        this.loadElementImages();
        this.elementImage = new ElementImage();
      },
      response => {
        console.log("Error : " + response);
        //this.success = true;
      }
    );
  }
}
