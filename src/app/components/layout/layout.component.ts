import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../../service/buyers.service';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private buyersService:BuyersService, private productsService:ProductsService) {
    this.buyersService = buyersService;
    this.productsService = productsService;
  }

  handleSearchBuyer(buyer){
   this.buyersService.search(buyer);
  }

  handleSearchProduct(product){
   this.productsService.searchingTerm(product);
  }

  ngOnInit() { }

}
