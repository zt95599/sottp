import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIntegerComponent } from './user-integer.component';

describe('UserIntegerComponent', () => {
  let component: UserIntegerComponent;
  let fixture: ComponentFixture<UserIntegerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIntegerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIntegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
