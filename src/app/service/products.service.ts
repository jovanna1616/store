import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductsService {
	searchTerm = new BehaviorSubject([]);

	private products = [
		new Product(1, 'milk', 30),
		new Product(2, 'bread', 20),
		new Product(3, 'mineral water', 30),
		new Product(4, 'juice', 50),
		new Product(5, 'coca cola', 30),
	];

	getProducts(): Array<Object> {
		return this.products;
	}

	searchingTerm(term){
		this.searchTerm.next(term);
	}
	getSearchedProduct() {
		return this.searchTerm;
	}
  constructor() { }

}
