import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionTarjetaExitosaComponent } from './asignacion-tarjeta-exitosa.component';

describe('AsignacionTarjetaExitosaComponent', () => {
  let component: AsignacionTarjetaExitosaComponent;
  let fixture: ComponentFixture<AsignacionTarjetaExitosaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionTarjetaExitosaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionTarjetaExitosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
