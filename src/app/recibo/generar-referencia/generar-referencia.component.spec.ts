import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarReferenciaComponent } from './generar-referencia.component';

describe('GenerarReferenciaComponent', () => {
  let component: GenerarReferenciaComponent;
  let fixture: ComponentFixture<GenerarReferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarReferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
