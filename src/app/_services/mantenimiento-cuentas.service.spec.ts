import { TestBed } from '@angular/core/testing';

import { MantenimientoCuentasService } from './mantenimiento-cuentas.service';

describe('MantenimientoCuentasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MantenimientoCuentasService = TestBed.get(MantenimientoCuentasService);
    expect(service).toBeTruthy();
  });
});
