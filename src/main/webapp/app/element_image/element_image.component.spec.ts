import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementimageComponent } from './element_image.component';

describe('ElementimageComponent', () => {
  let component: ElementimageComponent;
  let fixture: ComponentFixture<ElementimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
