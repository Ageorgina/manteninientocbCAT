import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoMesesSinInteresesComponent } from './pago-meses-sin-intereses.component';

describe('PagoMesesSinInteresesComponent', () => {
  let component: PagoMesesSinInteresesComponent;
  let fixture: ComponentFixture<PagoMesesSinInteresesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoMesesSinInteresesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoMesesSinInteresesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
