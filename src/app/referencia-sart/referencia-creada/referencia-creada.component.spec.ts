import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciaCreadaComponent } from './referencia-creada.component';

describe('ReferenciaCreadaComponent', () => {
  let component: ReferenciaCreadaComponent;
  let fixture: ComponentFixture<ReferenciaCreadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenciaCreadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciaCreadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
