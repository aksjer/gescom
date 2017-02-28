import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerlistitem',
  templateUrl: './customerlistitem.component.html',
  styleUrls: ['./customerlistitem.component.css']
})
export class CustomerlistitemComponent implements OnInit {

  @Input() customer: Customer

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  delete() {
    this.customerService.delete(this.customer.id);
  }

  console(e) {
    console.log(e);
  }

}
