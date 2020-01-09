import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoExitosoComponent } from './pago-exitoso.component';

describe('PagoExitosoComponent', () => {
  let component: PagoExitosoComponent;
  let fixture: ComponentFixture<PagoExitosoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoExitosoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
