import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public router:Router) { }

//首页 广告图片
  state = {
    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
  };

  //点击商品跳转明细
  showProductGroup(path) {
    this.router.navigate(["product-group"],{queryParams:path});
  }




  //商品展示
   listShopArray():Object{
     const array=[
     {

        icon:'http://operates.oss-cn-beijing.aliyuncs.com/tbHomeshop/url/Sat%20Mar%2030%2010%3A33%3A58%20CST%202019-1.jpg',
        titleDesc:'我是商品名称撒地方 士大夫撒方法是撒的发撒的撒的发撒的是打发的',
        id:'1232',
        money:'1999.22',
        markCnt:'222'

      },{
        icon:'http://operates.oss-cn-beijing.aliyuncs.com/tbHomeshop/url/Sat%20Mar%2030%2010%3A33%3A58%20CST%202019-1.jpg',
        titleDesc:'我是商品名称我是一个审批生活恒美好的视频撒地方士大夫撒撒地方',
        id:'123',
        money:'1999.22',
        markCnt:'222'


    },{
      icon:'http://operates.oss-cn-beijing.aliyuncs.com/tbHomeshop/url/Sat%20Mar%2030%2010%3A33%3A58%20CST%202019-1.jpg',
      titleDesc:'我是商品名称我是一个审批生活恒美好的视频撒地方士大夫撒撒地方',
      id:'123',
      money:'1999.22',
      markCnt:'222'


    },{
      icon:'http://operates.oss-cn-beijing.aliyuncs.com/tbHomeshop/url/Sat%20Mar%2030%2010%3A33%3A58%20CST%202019-1.jpg',
      titleDesc:'我是商品名称我是一个审批生活恒美好的视频撒地方士大夫撒撒地方',
      id:'123',
      money:'1999.22',
      markCnt:'222'


    }
  ]
  return array};


  img="http://operates.oss-cn-beijing.aliyuncs.com/tbHomeshop/url/Sat%20Mar%2030%2010%3A33%3A58%20CST%202019-1.jpg";

  clickUrlA(Paramlist) {
    this.router.navigate(["product-detail"],{queryParams:Paramlist}
    )
  }





  listShop=this.listShopArray();
  ngOnInit() {

  }

  productTypeList(index){
   // this.listShop=this.listShopArray();
    console.log(index);
  }






}
