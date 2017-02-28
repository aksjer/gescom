import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../models/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit {

  customer: Customer;

  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit() {
    const id: number = parseInt(this.route.snapshot.params['id']);
    this.customerService.get(id).subscribe(c => this.customer = c);
  }

}
