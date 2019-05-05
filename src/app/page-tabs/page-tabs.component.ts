import { Component, OnInit } from '@angular/core';
import {UtilsServiceService} from "../utils-service.service";


@Component({
  selector: 'app-page-tabs',
  templateUrl: './page-tabs.component.html',
  styleUrls: ['./page-tabs.component.css']
})
export class PageTabsComponent implements OnInit {

  hidden: boolean = false;
  tintColor: string = '#108ee9';
  unselectedTintColor: string = '#888';
  tabbarStyle:object = {'height': '100%', 'position':'fixed', 'bottom': '0px', 'width': '100%'};

  constructor(private utils:UtilsServiceService){}

  ngOnInit() {
  }
  selectedIndex=this.utils.getIndex();
  onPress(event) {
    console.log(event.key);
    this.utils.setIndex(event.key);
  }
}


