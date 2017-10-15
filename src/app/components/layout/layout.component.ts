import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../../service/buyers.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private buyersService:BuyersService) {
    this.buyersService = buyersService;
  }

  handleSearch(buyer){
   this.buyersService.search(buyer);
  }

  ngOnInit() { }

}
