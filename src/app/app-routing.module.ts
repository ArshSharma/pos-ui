import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerSearchComponent} from './components/customer-search/customer-search.component';
import {CustomerAddComponent} from './components/customer-add/customer-add.component';
import { LoginEmployeeComponent } from './components/login-employee/login-employee.component';
import { DrawerOpenComponent } from './components/drawer-open/drawer-open.component';
const routes: Routes = [
  {
    path: 'customers',
    component: CustomerSearchComponent
  },
  {
    path: 'add',
    component: CustomerAddComponent
  },
  {
    path: 'login',
    component: LoginEmployeeComponent
  },
  {
    path: ':id/drawer',
    component: DrawerOpenComponent
  },
  {
    path: 'drawer',
    component: DrawerOpenComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
