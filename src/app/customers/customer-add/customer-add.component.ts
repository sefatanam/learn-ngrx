import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Customer } from '../customer.model';

import * as customerAction from '../state/customer.action';
import * as fromCustomer from '../state/customer.reducer';
import { Store, State, select } from "@ngrx/store";


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customerForm : FormGroup;

  constructor( private fb: FormBuilder,
    private store: Store<fromCustomer.AppState>) { }

  ngOnInit(): void { 
    this.customerForm = this.fb.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      address: ["", Validators.required],
      membership: ["", Validators.required]
    })

    this.customerForm.valueChanges.subscribe(console.log);
  }

  

 
  

  createCustomer() {
    const newCustomer: Customer = {
      name: this.customerForm.get("name").value,
      phone: this.customerForm.get("phone").value,
      address: this.customerForm.get("address").value,
      membership: this.customerForm.get("membership").value
    };


    console.log(newCustomer);
    this.store.dispatch(new customerAction.CreateCustomer(newCustomer));

    this.customerForm.reset();
  }


}
