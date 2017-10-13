import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../../service/buyers.service';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {
  
  buyers :Array<Object>;

  constructor(private buyersService:BuyersService) {
	  this.buyers = buyersService.getBuyers();
   }

  removeBuyer(index) {
	  return this.buyers.splice(index, 1);
  }


  ngOnInit() {
  }

}
