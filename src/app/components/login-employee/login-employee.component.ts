import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs/observable';
import {EmployeeService} from '../../services/employee.service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-employee',
  templateUrl: './login-employee.component.html',
  styleUrls: ['./login-employee.component.css']
})
export class LoginEmployeeComponent implements OnInit {

  loginForm: FormGroup;
  validMessage:string ="";
  employeeData;
  constructor(private employeeService:EmployeeService,private _route:Router) {

   }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    });

  }
  authLogin(){
    if(this.loginForm.valid){
      this.validMessage="Customer Added"
      this.employeeService.authLogin(this.loginForm.value).subscribe(
        data=>{
        this.employeeData=data;
        // this.data.addLogin(data);
        this._route.navigate([this.employeeData.id+'/drawer'])
      
      },
      error =>{ return Observable.throw(error)} 
      );
    }
    else{
      this.validMessage="fill form"
    }
  }


}
