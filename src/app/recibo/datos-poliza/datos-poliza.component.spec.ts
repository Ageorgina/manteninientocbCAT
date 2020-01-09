import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPolizaComponent } from './datos-poliza.component';

describe('DatosPolizaComponent', () => {
  let component: DatosPolizaComponent;
  let fixture: ComponentFixture<DatosPolizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosPolizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
