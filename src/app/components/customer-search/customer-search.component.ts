import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service'


@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit {
  
  public customers;
  _listFilters : string;

  get listFilters():string{
    return this._listFilters
  }
  set listFilters(value:string){
    this._listFilters=value;
    this.getSearchList();
  }
  constructor(private customerService : CustomerService) { }

  ngOnInit() {
    
  }



  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe(
      data=>{this.customers=data},
      err => console.error('nhi ho rha'),
      ()=>console.log('customers loaded')
    );
  }
  
  getSearchList(){
    this.customerService.getFilteredList(this.listFilters).subscribe(
      data=>{this.customers=data},
      err => console.error('cannot get list from api'),
      ()=>console.log('filtered customers loaded')
    )
    
  }

}
