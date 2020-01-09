import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoPrimaComponent } from './pago-prima.component';

describe('PagoPrimaComponent', () => {
  let component: PagoPrimaComponent;
  let fixture: ComponentFixture<PagoPrimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoPrimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoPrimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
