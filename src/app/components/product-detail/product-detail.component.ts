import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
	product:Object;
  constructor(private productsService:ProductsService, private route: ActivatedRoute) {
  	route.params.subscribe(params => {
  		productsService.getProducts().forEach(product => {
  			if(product['id'] == params.id) {
  				this.product = product
  			}
  		})
  	})
 }

  ngOnInit() {
  }

}
