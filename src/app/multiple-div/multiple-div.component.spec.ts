import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleDivComponent } from './multiple-div.component';

describe('MultipleDivComponent', () => {
  let component: MultipleDivComponent;
  let fixture: ComponentFixture<MultipleDivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleDivComponent]
    });
    fixture = TestBed.createComponent(MultipleDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
