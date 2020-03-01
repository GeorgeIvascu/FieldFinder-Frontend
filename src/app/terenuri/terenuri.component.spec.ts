import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerenuriComponent } from './terenuri.component';

describe('TerenuriComponent', () => {
  let component: TerenuriComponent;
  let fixture: ComponentFixture<TerenuriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerenuriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerenuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
