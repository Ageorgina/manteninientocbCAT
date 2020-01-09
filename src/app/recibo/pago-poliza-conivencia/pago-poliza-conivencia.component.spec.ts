import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoPolizaConivenciaComponent } from './pago-poliza-conivencia.component';

describe('PagoPolizaConivenciaComponent', () => {
  let component: PagoPolizaConivenciaComponent;
  let fixture: ComponentFixture<PagoPolizaConivenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoPolizaConivenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoPolizaConivenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
