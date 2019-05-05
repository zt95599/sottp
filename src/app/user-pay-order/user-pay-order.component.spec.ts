import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPayOrderComponent } from './user-pay-order.component';

describe('UserPayOrderComponent', () => {
  let component: UserPayOrderComponent;
  let fixture: ComponentFixture<UserPayOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPayOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPayOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
