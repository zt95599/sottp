import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public router:Router) { }
  name="Asmpale";
  icon="https://wx.qlogo.cn/mmopen/vi_32/VDYELLHPAm3UZ2an9PobibGMLYBUibBQIODqZemUicibXUd7GUDTW7QVfUaetUYpj2Kh2g2icicLXuRYY2aNnBicvGYXg/132";
  usercode="8885554";
  ngOnInit() {
  }

  navPath(path){
    this.router.navigate([path]);
  }

}
