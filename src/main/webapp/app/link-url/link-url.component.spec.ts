import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkUrlComponent } from './link-url.component';

describe('LinkUrlComponent', () => {
  let component: LinkUrlComponent;
  let fixture: ComponentFixture<LinkUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
