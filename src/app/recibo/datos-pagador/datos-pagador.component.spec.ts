import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPagadorComponent } from './datos-pagador.component';

describe('DatosPagadorComponent', () => {
  let component: DatosPagadorComponent;
  let fixture: ComponentFixture<DatosPagadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosPagadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPagadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
