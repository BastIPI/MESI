import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementImage } from './element_image.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-elementimage',
  templateUrl: './element_image.component.html',
  styleUrls: ['./element_image.component.css']
})
export class ElementImageComponent implements OnInit {

  elementImage: ElementImage = new ElementImage();
  elementImageForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[_.@A-Za-z0-9-]*$')]]/*,
    email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    firstName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[_.@A-Za-z0-9-]*$')]],
    lastName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[_.@A-Za-z0-9-]*$')]]*/
  });

  constructor(
    private fb: FormBuilder,
    protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
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

}
