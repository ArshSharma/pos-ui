import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {
  url="http://localhost:2040/employee/";

  constructor(private http:HttpClient) { 

  }

  authLogin(employee){
    let body= JSON.stringify(employee);
    console.log(body)
    return this.http.post(this.url+'login',body,httpOptions )
  }

}
