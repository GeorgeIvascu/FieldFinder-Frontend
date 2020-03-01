import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerenSelectatComponent } from './teren-selectat.component';

describe('TerenSelectatComponent', () => {
  let component: TerenSelectatComponent;
  let fixture: ComponentFixture<TerenSelectatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerenSelectatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerenSelectatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
