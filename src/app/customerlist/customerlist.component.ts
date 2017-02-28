import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  customers: Customer[];
  formCustomer: Customer;

  constructor(private customerService: CustomerService) { 
    
  }

  ngOnInit() {
    this.customerService.getAll().subscribe(customers => this.customers = customers);
  }

  // add() {
  //   debugger
  //   const id = this.customers.sort(e => e.id)[0].id;
  //   this.formCustomer.id = id;
  //   this.customerService.add(this.formCustomer);
  // }

}
