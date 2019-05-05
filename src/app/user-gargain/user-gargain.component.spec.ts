import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGargainComponent } from './user-gargain.component';

describe('UserGargainComponent', () => {
  let component: UserGargainComponent;
  let fixture: ComponentFixture<UserGargainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGargainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGargainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
