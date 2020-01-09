import { TestBed } from '@angular/core/testing';

import { CampaniasService } from './campanias.service';

describe('CampaniasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampaniasService = TestBed.get(CampaniasService);
    expect(service).toBeTruthy();
  });
});
