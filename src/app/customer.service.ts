import { Injectable } from '@angular/core';
import { Customer } from './models/customer';
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';

@Injectable()
export class CustomerService implements CanActivate, CanActivateChild {

  isLoggedIn: boolean = false;
  redirectUrl: string;

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('canActivateChild')
    return false;
  }

  checkLogin(): boolean {
    // checkLogin(url: string): boolean {
    if (this.isLoggedIn) {
      if (this.redirectUrl)
        this.router.navigate([this.redirectUrl]);
      return true;
    }
    // this.redirectUrl = url;
    this.router.navigate(['']);
    return false;
  }

  customers: Customer[] = [
    { id: 1, name: 'johny walker', age: 60, description: 'heehghge', options: [1, 2, 3] },
    { id: 2, name: 'sticky', age: 35, description: 'hfdghfgsfhfgksjhfm', options: [1] },
    { id: 3, name: 'john rambo', age: 23, description: 'i am the bosss', options: [3] }
  ];

  getAll(): Observable<Customer[]> {
    return Observable.create(observer => {
      observer.next(this.customers);
      observer.complete(console.log('end'));
    });
  }

  get(custId: number): Observable<Customer> {
    return Observable.create(observer => observer.next(this.customers.find(e => e.id === custId)));
  }

  delete(id: number): void {
    this.customers.splice(this.customers.findIndex(c => c.id === id), 1);
  }

  add(c: Customer): void {
    this.customers.push(c);
  }

}
