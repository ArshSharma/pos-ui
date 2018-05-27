import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'
import { CustomerService } from './services/customer.service'
import { ProductsService } from './services/products.service'
import { EmployeeService } from './services/employee.service'
import { DrawerService } from './services/drawer.service'
import { DataService } from './services/data.service'
import { AppComponent } from './app.component';
import { CustomerSearchComponent } from './components/customer-search/customer-search.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { LoginEmployeeComponent } from './components/login-employee/login-employee.component';
import { DrawerOpenComponent } from './components/drawer-open/drawer-open.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    CustomerSearchComponent,
    CustomerAddComponent,
    LoginEmployeeComponent,
    DrawerOpenComponent,
    ProductSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [CustomerService,EmployeeService,DataService,DrawerService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
