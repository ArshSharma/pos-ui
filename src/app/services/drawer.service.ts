import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DrawerService {

  url="http://localhost:2040/";

  constructor(private http:HttpClient) {

   }

   getTodayDrawer(id : number){
    return this.http.get(this.url+'employee/'+id +"/drawer",)
  }
  setOpeningDrawer(id : number, drawer){
    let body= '{ "openingBalance" : ' + drawer +'}'
    console.log(body);
    return this.http.post(this.url+'employee/'+id +"/drawer", body, httpOptions)
  }

  setClosingDrawer(id: number, drawer){
    let body= "{ 'openingBalance' : " + drawer +"}"
    console.log(body);
    return this.http.put(this.url+'employee/'+id +"/drawer", body, httpOptions)
  }
}
