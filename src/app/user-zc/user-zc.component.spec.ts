import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserZcComponent } from './user-zc.component';

describe('UserZcComponent', () => {
  let component: UserZcComponent;
  let fixture: ComponentFixture<UserZcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserZcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserZcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
