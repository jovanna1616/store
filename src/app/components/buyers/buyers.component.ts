import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { BuyersService } from '../../service/buyers.service';
import { FormsModule } from '@angular/forms';
import { Buyer } from '../../buyer';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {
  @Output() search = new EventEmitter();
  buyer: Array<Buyer>;
  buyers :Array<Object>;
  newBuyer = new Buyer();

  constructor(private buyersService:BuyersService) {
	  this.buyers = buyersService.getBuyers();
  }
  // method for emitting buyer
  handleSearch() {
    this.search.emit(this.buyer);
  }

  removeBuyer(index) {
	  return this.buyers.splice(index, 1);
  }

  addNewBuyer(newBuyer) {
    this.buyers.push(newBuyer);
  }
  // need to subscribe on emited buyer 
  ngOnInit() {
    this.buyersService.getSearchedBuyer().subscribe
      (
        buyer => {this.buyer = buyer}
      )
  }
  
}
