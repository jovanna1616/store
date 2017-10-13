import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BuyersComponent } from './components/buyers/buyers.component';
import { ProductsComponent } from './components/products/products.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BuyersService } from './service/buyers.service';

@NgModule({
  declarations: [
    AppComponent,
    BuyersComponent,
	ProductsComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
  FormsModule,
  ],
  providers: [BuyersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
