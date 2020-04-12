import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { RouterModule, Routes} from '@angular/router';

const customerRoutes: Routes =[{path: '', component: CustomerComponent}];



@NgModule({
  declarations: [CustomerComponent, CustomerAddComponent, CustomerEditComponent, CustomerListComponent, CustomerDeleteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes)
  ]
})
export class CustomersModule { }
