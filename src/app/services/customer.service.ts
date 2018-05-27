import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import { Customer } from '../models/customer';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CustomerService {
  url="http://localhost:2040/";
  utrl="https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles";

  constructor(private http:HttpClient) { 

  }

  getAllCustomers(): Observable<Customer>{
    return this.http.get<Customer>(this.url+'customers')
  }
  getFilteredList(search:string) :Observable<Customer>{
    console.log(search)
    return this.http.get<Customer>(this.url+'customers/'+search)
  }
  addCustomer(customer): Observable<Customer>{
    customer.number=customer.number+'';
    let body= JSON.stringify(customer);
    console.log(body)
    return this.http.post<Customer>(this.url+'customers',body,httpOptions )
  }

}
