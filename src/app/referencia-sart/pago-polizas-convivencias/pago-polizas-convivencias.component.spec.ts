import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoPolizasConvivenciasComponent } from './pago-polizas-convivencias.component';

describe('PagoPolizasConvivenciasComponent', () => {
  let component: PagoPolizasConvivenciasComponent;
  let fixture: ComponentFixture<PagoPolizasConvivenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoPolizasConvivenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoPolizasConvivenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
