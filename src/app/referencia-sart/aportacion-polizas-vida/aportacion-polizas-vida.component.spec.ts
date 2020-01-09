import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AportacionPolizasVidaComponent } from './aportacion-polizas-vida.component';

describe('AportacionPolizasVidaComponent', () => {
  let component: AportacionPolizasVidaComponent;
  let fixture: ComponentFixture<AportacionPolizasVidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AportacionPolizasVidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AportacionPolizasVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
