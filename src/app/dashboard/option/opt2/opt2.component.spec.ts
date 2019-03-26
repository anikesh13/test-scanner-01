import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Opt2Component } from './opt2.component';

describe('Opt2Component', () => {
  let component: Opt2Component;
  let fixture: ComponentFixture<Opt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Opt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Opt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
