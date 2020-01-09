import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoCuentasComponent } from './mantenimiento-cuentas.component';

describe('MantenimientoCuentasComponent', () => {
  let component: MantenimientoCuentasComponent;
  let fixture: ComponentFixture<MantenimientoCuentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoCuentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
