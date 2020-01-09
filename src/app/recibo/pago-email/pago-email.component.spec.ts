import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoEmailComponent } from './pago-email.component';

describe('PagoEmailComponent', () => {
  let component: PagoEmailComponent;
  let fixture: ComponentFixture<PagoEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
