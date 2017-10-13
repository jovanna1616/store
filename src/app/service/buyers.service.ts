import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Buyer } from '../buyer';

@Injectable()
export class BuyersService {


	private buyers = [

		new Buyer(1, 'John', 'Doe', 'johndoe@example.com', [new Product(1, 'milk', 10)]),
		new Buyer(2, 'Joan', 'Doe', 'joandoe@example.com', [new Product(2, 'milk', 10)]),	
	];

	getBuyers() :Array<Object> {
		return this.buyers;
	}

	
	private products = [

		new Product(1, 'milk', 10),
		new Product(2, 'bread', 20),
		new Product(3, 'mineral water', 30),
	];

	getProducts(): Array<Object> {
		return this.products;
	}

	


  constructor() { }

}
