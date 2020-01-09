import { TestBed } from '@angular/core/testing';

import { ReferenciasSartService } from './referencias-sart.service';

describe('ReferenciasSartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReferenciasSartService = TestBed.get(ReferenciasSartService);
    expect(service).toBeTruthy();
  });
});
