import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { LoadingService } from "./loading.service";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  public  httpurl="http://127.0.0.1:8083/share/";

  httpOptions={
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(public http:HttpClient,public loading:LoadingService) { }

  doGet(url: any, params?: any) {
    return new Observable(observer => {
      this.http.get(this.httpurl + url, params).subscribe(response => {
        observer.next(response);

      }, err => {
        observer.error(err);
      })

    });
  }


  private  index='0';
  setIndex(indexnav){
    this.index=indexnav;
  }
  getIndex(){
    return this.index;
  }


  getAuthorizationToken() {
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : "123";
    if (token) {
      const jwt = `Bearer ${token}`;
      return jwt;
    } else {
     // this.router.navigate(["/passport/login"]);
    }
  }



}
