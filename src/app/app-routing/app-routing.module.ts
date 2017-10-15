import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BuyersComponent } from '../components/buyers/buyers.component';
import { ProductsComponent } from '../components/products/products.component';
import { BuyerProfileComponent } from '../components/buyer-profile/buyer-profile.component';

const appRoutes: Routes = [
	{ path: 'buyers', component: BuyersComponent },
  { path: 'buyers/:id', component: BuyerProfileComponent },
	{ path: 'products', component: ProductsComponent },
]


@NgModule({
  imports: [
		RouterModule.forRoot(appRoutes),
    FormsModule,

  ],
  declarations: [
  ],
  exports: [
  	RouterModule,
  ]
})
export class AppRoutingModule { }
