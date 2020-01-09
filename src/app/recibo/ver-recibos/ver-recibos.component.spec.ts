import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerRecibosComponent } from './ver-recibos.component';

describe('VerRecibosComponent', () => {
  let component: VerRecibosComponent;
  let fixture: ComponentFixture<VerRecibosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerRecibosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerRecibosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
