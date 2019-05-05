import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TextChar } from './common/pipe/comm.pipe';


import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgZorroAntdMobileModule , Toast} from 'ng-zorro-antd-mobile';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ShopTypeComponent } from './shop-type/shop-type.component';
import { MyShopCartComponent } from './my-shop-cart/my-shop-cart.component';
import { LoadingComponent } from './loading/loading.component';
import {HttpRequestService} from "./http-request.service";
import {AuthInterceptor} from "./http-interceptors";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductOrderComponent } from './product-order/product-order.component';
import { UserCouponComponent } from './user-coupon/user-coupon.component';
import { UserWalletComponent } from './user-wallet/user-wallet.component';
import { UserIntegerComponent } from './user-integer/user-integer.component';
import { PageTabsComponent } from './page-tabs/page-tabs.component';
import { UserPayOrderComponent } from './user-pay-order/user-pay-order.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { UserGargainComponent } from './user-gargain/user-gargain.component';
import { UserZcComponent } from './user-zc/user-zc.component';
import { ProductGroupComponent } from './product-group/product-group.component';
import { UserTeamComponent } from './user-team/user-team.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ShopTypeComponent,
    MyShopCartComponent,
    TextChar,
    LoadingComponent,
    ProductDetailComponent,
    ProductOrderComponent,
    UserCouponComponent,
    UserWalletComponent,
    UserIntegerComponent,
    PageTabsComponent,
    UserPayOrderComponent,
    UserInfoComponent,
    UserGroupComponent,
    UserGargainComponent,
    UserZcComponent,
    ProductGroupComponent,
    UserTeamComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule
  ],
  providers: [
    HttpRequestService,Toast,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
