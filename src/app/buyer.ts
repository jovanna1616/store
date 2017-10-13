import { Product } from './product';

export class Buyer {

	id: number;
	firstName: string;
	lastName: string;
	email: string;
	products: Array<Product>;

	constructor(buyerId:number, buyerFirstName:string, buyerLastName:string, buyerEmail:string, buyerProducts:Array<Product>) {
		this.id = buyerId;
		this.firstName = buyerFirstName;
		this.lastName = buyerLastName;
		this.email = buyerEmail;
		this.products = buyerProducts;
	}

}
