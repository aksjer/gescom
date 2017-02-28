import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './app.routes';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerlistitemComponent } from './customerlistitem/customerlistitem.component';
import { HomeComponent } from './home/home.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { CustomerService } from './customer.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CustomerlistComponent,
    CustomerlistitemComponent,
    HomeComponent,
    CustomerdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    CommonModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
