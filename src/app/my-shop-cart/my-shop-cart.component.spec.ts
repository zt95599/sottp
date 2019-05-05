import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShopCartComponent } from './my-shop-cart.component';

describe('MyShopCartComponent', () => {
  let component: MyShopCartComponent;
  let fixture: ComponentFixture<MyShopCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyShopCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyShopCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
