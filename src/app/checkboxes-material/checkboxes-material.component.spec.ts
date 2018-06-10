import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxesMaterialComponent } from './checkboxes-material.component';

describe('CheckboxesMaterialComponent', () => {
  let component: CheckboxesMaterialComponent;
  let fixture: ComponentFixture<CheckboxesMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxesMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxesMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
