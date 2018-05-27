import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'
import { CustomerService } from './services/customer.service'
import { EmployeeService } from './services/employee.service'
import { DrawerService } from './services/drawer.service'
import { DataService } from './services/data.service'
import { AppComponent } from './app.component';
import { CustomerSearchComponent } from './components/customer-search/customer-search.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { LoginEmployeeComponent } from './components/login-employee/login-employee.component';
import { DrawerOpenComponent } from './components/drawer-open/drawer-open.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerSearchComponent,
    CustomerAddComponent,
    LoginEmployeeComponent,
    DrawerOpenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CustomerService,EmployeeService,DataService,DrawerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
