import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosTarjetaAsignadaComponent } from './datos-tarjeta-asignada.component';

describe('DatosTarjetaAsignadaComponent', () => {
  let component: DatosTarjetaAsignadaComponent;
  let fixture: ComponentFixture<DatosTarjetaAsignadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosTarjetaAsignadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosTarjetaAsignadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
