import { TestBed } from '@angular/core/testing';

import { LevelMechanicService } from './level_mechanic.service';

describe('LevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LevelMechanicService = TestBed.get(LevelMechanicService);
    expect(service).toBeTruthy();
  });
});
