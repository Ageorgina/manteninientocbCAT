import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionTarjetaComponent } from './asignacion-tarjeta.component';

describe('AsignacionTarjetaComponent', () => {
  let component: AsignacionTarjetaComponent;
  let fixture: ComponentFixture<AsignacionTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
