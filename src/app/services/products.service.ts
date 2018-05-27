import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import { Product } from '../models/product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ProductsService {

  url="http://localhost:2040/products/";
  

  constructor(private http:HttpClient) { 

  }

  getAllProducts(): Observable<Product>{
    return this.http.get<Product>(this.url)
  }
  getFilteredList(search:string) :Observable<Product>{
    console.log(search)
    return this.http.get<Product>(this.url+search)
  }

}
