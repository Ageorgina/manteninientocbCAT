import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoEmailEnviadoComponent } from './pago-email-enviado.component';

describe('PagoEmailEnviadoComponent', () => {
  let component: PagoEmailEnviadoComponent;
  let fixture: ComponentFixture<PagoEmailEnviadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoEmailEnviadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoEmailEnviadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
