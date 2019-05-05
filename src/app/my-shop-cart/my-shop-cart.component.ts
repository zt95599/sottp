import { Component, OnInit } from '@angular/core';
import {HttpRequestService} from "../http-request.service"

@Component({
  selector: 'app-my-shop-cart',
  templateUrl: './my-shop-cart.component.html',
  styleUrls: ['./my-shop-cart.component.css']
})
export class MyShopCartComponent implements OnInit {

  constructor(
    public httprequest:HttpRequestService
  ) { }
  img="http://operates.oss-cn-beijing.aliyuncs.com/tbHomeshop/url/Sat%20Mar%2030%2010%3A33%3A58%20CST%202019-1.jpg";
  ngOnInit() {
    //请求服务
    const obj={
      storeId:'181231-37521231165540'
    }
    this.httprequest.doGet('homepage', {params: obj}).subscribe(data => {
      console.log(data);
    });
  }
data=this.getData();
  getData():Object{
      const array=[];
      for(var i = 0; i < 5; i++) {
        array.push({
          couponName: "卷1", //名称
          couponDescription: "描述1", //描述
          couponClass: 'sss', //类型
          startDate: '2019-10-10', //开始时间
          endDate: '2019-10-10', //结束时间
          couponAmount: '1', //数量
          couponMoney: '12',
          couponId: '123123',
          createrId: '123123223',
          atoncestate: '立即领取'
        })
    }
    return array;
  }
}
