import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  //页面传常
  constructor(private router:Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.queryParamMap.subscribe(productList => {
      console.log(productList);
    });
  }

  ngOnInit() {
  }

  //首页 广告图片
  state = {
    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
  };
  shopNumber=1;
  shopDescNumber=1;
  change(value){
    this.shopDescNumber=value;
  }
  abc:object={color:'red'};





}
