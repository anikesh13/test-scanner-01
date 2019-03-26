import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Opt1Component } from './opt1.component';

describe('Opt1Component', () => {
  let component: Opt1Component;
  let fixture: ComponentFixture<Opt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Opt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Opt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
