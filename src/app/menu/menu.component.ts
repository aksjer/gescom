import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  isLogged() {
    this.customerService.isLoggedIn = !this.customerService.isLoggedIn;
    this.customerService.checkLogin();
  }

}
