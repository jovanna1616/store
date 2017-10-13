import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BuyersComponent } from '../components/buyers/buyers.component';
import { ProductsComponent } from '../components/products/products.component';

const appRoutes: Routes = [
	{ path: 'buyers', component: BuyersComponent },
	{ path: 'products', component: ProductsComponent },
]


@NgModule({
  imports: [
		RouterModule.forRoot(appRoutes)
  ],
  declarations: [
  ],
  exports: [
  	RouterModule
  ]
})
export class AppRoutingModule { }
