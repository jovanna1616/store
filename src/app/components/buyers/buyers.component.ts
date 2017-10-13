import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../../service/buyers.service';
import { Buyer } from '../../buyer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {
  
  buyers :Array<Object>;
  newBuyer = new Buyer();

  constructor(private buyersService:BuyersService) {
	  this.buyers = buyersService.getBuyers();
  }

  removeBuyer(index) {
	  return this.buyers.splice(index, 1);
  }

  createNewBuyer(buyer) {
    this.buyers.push(buyer);
  }


  ngOnInit() {
  }

}
