import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaAsignadaComponent } from './tarjeta-asignada.component';

describe('TarjetaAsignadaComponent', () => {
  let component: TarjetaAsignadaComponent;
  let fixture: ComponentFixture<TarjetaAsignadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaAsignadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaAsignadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
