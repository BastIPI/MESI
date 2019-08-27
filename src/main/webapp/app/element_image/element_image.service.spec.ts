import { TestBed } from '@angular/core/testing';

import { ElementImageService } from './element_image.service';

describe('ElementImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElementImageService = TestBed.get(ElementImageService);
    expect(service).toBeTruthy();
  });
});
