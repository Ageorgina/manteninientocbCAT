import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosRecibosComponent } from './datos-recibos.component';

describe('DatosRecibosComponent', () => {
  let component: DatosRecibosComponent;
  let fixture: ComponentFixture<DatosRecibosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosRecibosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosRecibosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
