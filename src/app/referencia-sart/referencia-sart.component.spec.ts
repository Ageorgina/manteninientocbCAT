import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciaSartComponent } from './referencia-sart.component';

describe('ReferenciaSartComponent', () => {
  let component: ReferenciaSartComponent;
  let fixture: ComponentFixture<ReferenciaSartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenciaSartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciaSartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
