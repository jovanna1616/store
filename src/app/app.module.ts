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
import { ProductsService } from './service/products.service';
import { BuyerProfileComponent } from './components/buyer-profile/buyer-profile.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BuyersComponent,
	  ProductsComponent,
    LayoutComponent,
    BuyerProfileComponent,
    ProductDetailComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
	  AppRoutingModule,
    FormsModule,
  ],
  providers: [BuyersService, ProductsService],
  bootstrap: [AppComponent],
  exports: [
  RouterModule,
  LayoutComponent,
  ]
})
export class AppModule { }
