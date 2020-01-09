import { TestBed } from '@angular/core/testing';

import { ReciboService } from './recibo.service';

describe('ReciboService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReciboService = TestBed.get(ReciboService);
    expect(service).toBeTruthy();
  });
});
