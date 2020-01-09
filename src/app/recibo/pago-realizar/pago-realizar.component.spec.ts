import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoRealizarComponent } from './pago-realizar.component';

describe('PagoRealizarComponent', () => {
  let component: PagoRealizarComponent;
  let fixture: ComponentFixture<PagoRealizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoRealizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoRealizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
