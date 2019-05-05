import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsServiceService {

  constructor() { }

  public indexNumber:number=0;

  setIndex(index){
    this.indexNumber=index;
  }
  getIndex(){
    return this.indexNumber;
  }

}
