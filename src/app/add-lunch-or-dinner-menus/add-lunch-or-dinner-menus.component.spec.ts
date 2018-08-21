import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLunchOrDinnerMenusComponent } from './add-lunch-or-dinner-menus.component';

describe('AddLunchOrDinnerMenusComponent', () => {
  let component: AddLunchOrDinnerMenusComponent;
  let fixture: ComponentFixture<AddLunchOrDinnerMenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLunchOrDinnerMenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLunchOrDinnerMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
