import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {Customer} from '../../models/customer';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs/observable';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customerForm: FormGroup;
  validMessage:string ="";
  customerAdded;
  constructor(private customerService:CustomerService) {

   }

  ngOnInit() {
    this.customerForm = new FormGroup({
      name: new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      number:new FormControl('',Validators.required)
    });

  }

  addCustomer(){
    if(this.customerForm.valid){
      this.validMessage="Customer Added"
      this.customerService.addCustomer(this.customerForm.value).subscribe(
        data=>{
          console.log("error aa gya firse")
          console.log(data)
        this.customerAdded=data;
      
      },
      error =>{ return Observable.throw(error)} 
      );
    }
    else{
      this.validMessage="fill form"
    }
  }

}
