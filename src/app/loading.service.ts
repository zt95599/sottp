import { Injectable } from '@angular/core';

import { Toast } from 'ng-zorro-antd-mobile';



@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  constructor(public _toast:Toast) {}




  loadingShow(){
    setTimeout(()=>{
      Toast.loading(null,0, null, true);
    },0);
  }
  loadingHide(){
    Toast.hide();
  }


}
