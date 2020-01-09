import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesesSinInteresesComponent } from './meses-sin-intereses.component';

describe('MesesSinInteresesComponent', () => {
  let component: MesesSinInteresesComponent;
  let fixture: ComponentFixture<MesesSinInteresesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesesSinInteresesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesesSinInteresesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
