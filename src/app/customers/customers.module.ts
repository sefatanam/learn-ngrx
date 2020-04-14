import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { RouterModule, Routes} from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MatCheckboxModule} from '@angular/material/checkbox';
// Impliment NGRX
import { StoreModule } from '@ngrx/store';
import { customerReducer } from './state/customer.reducer';
import { EffectsModule, Actions } from '@ngrx/effects';
import { CustomerEffect } from './state/customer.effects';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';


const customerRoutes: Routes = [{path: '', component: CustomerComponent}];



@NgModule({
  declarations: [CustomerComponent, CustomerAddComponent, CustomerEditComponent, CustomerListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
    FormsModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatSelectModule, MatCheckboxModule,
    StoreModule.forFeature('customers', customerReducer),
    EffectsModule.forFeature([CustomerEffect]), MatFormFieldModule, MatTableModule, MatPaginatorModule, MatIconModule
  ]
})
export class CustomersModule { }
