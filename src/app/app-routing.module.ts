import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }      from './home/home.component'; //商品主页
import { UserComponent }      from './user/user.component'; //用户主页
import { MyShopCartComponent }      from './my-shop-cart/my-shop-cart.component'; //领福利
import { ShopTypeComponent }      from './shop-type/shop-type.component'; //商品类型
import {ProductDetailComponent} from  './product-detail/product-detail.component'; //产品明细
import  {PageTabsComponent} from "./page-tabs/page-tabs.component";  //首页导航
import {ProductGroupComponent} from "./product-group/product-group.component"; //商品首页进去的 banner  明细
import {ProductOrderComponent} from "./product-order/product-order.component"; //产品订单支付页面
import {UserCouponComponent} from "./user-coupon/user-coupon.component"; //用户优惠卷
import {UserGargainComponent} from "./user-gargain/user-gargain.component"; //用户砍价
import {UserGroupComponent} from "./user-group/user-group.component"; //用户 拼团
import {UserInfoComponent} from "./user-info/user-info.component"; //用户 账号 信息页面
import {UserIntegerComponent} from "./user-integer/user-integer.component"; //用户积分页面(译豆)
import {UserPayOrderComponent} from "./user-pay-order/user-pay-order.component"; //用户支付订单页面
import {UserTeamComponent} from "./user-team/user-team.component"; //用户好友
import {UserWalletComponent} from "./user-wallet/user-wallet.component"; // 用户红包页面
import {UserZcComponent} from "./user-zc/user-zc.component"; // 用户众筹

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'shopcary', component: MyShopCartComponent },
  { path: 'shoptype', component: ShopTypeComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'product-group', component: ProductGroupComponent },
  { path: 'product-order', component: ProductOrderComponent },
  { path: 'user-coupon', component: UserCouponComponent },
  { path: 'user-gargain', component: UserGargainComponent },
  { path: 'user-group', component: UserGroupComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: 'user-integer', component: UserIntegerComponent },
  { path: 'user-pay-order', component: UserPayOrderComponent },
  { path: 'user-team', component: UserTeamComponent },
  { path: 'user-wallet', component: UserWalletComponent },
  { path: 'user-zc', component: UserZcComponent },
  { path: 'tabs', component: PageTabsComponent },
  { path: '', redirectTo: '/tabs', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
