export class Product {

	id: number;
	name: string;
	quantity: number;

	constructor(productId:number, productName:string, productQuantity:number) {
		this.id = productId;
		this.name = productName;
		this.quantity = productQuantity;
	}
}
