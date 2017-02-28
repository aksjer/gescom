import { Routes } from '@angular/router';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { HomeComponent } from './home/home.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { CustomerService } from './customer.service';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'customer',
    canActivate: [CustomerService],
    children: [
      {
        path: '', component: CustomerlistComponent, canActivateChild: [CustomerService], children: [
          { path: ':id', component: CustomerdetailComponent }
        ]
      }

    ]
  }
];
