import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLevelComponent } from './detail-level.component';

describe('DetailLevelComponent', () => {
  let component: DetailLevelComponent;
  let fixture: ComponentFixture<DetailLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
