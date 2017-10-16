import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { FormsModule } from '@angular/forms';
import { Product } from '../../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	@Output() searchTerm = new EventEmitter();
	product: Array<Product>;
	products: Array<Object>;

  constructor(private productsService:ProductsService, private route: ActivatedRoute) {
  	this.products = productsService.getProducts();
 }

 // method for emitting product
  handleSearch() {
    this.searchTerm.emit(this.product);
  }

  ngOnInit() {
  	this.productsService.getSearchedProduct().subscribe
      (
        product => {this.product = product}
      )
  }

}
