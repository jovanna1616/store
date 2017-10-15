import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../../service/buyers.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.css']
})
export class BuyerProfileComponent implements OnInit {
	buyer:Object;

  constructor(private buyersService:BuyersService, private route: ActivatedRoute) {
  	route.params.subscribe(params => {
  		buyersService.getBuyers().forEach(buyer => {
  			if(buyer['id'] == params.id) {
  				this.buyer = buyer
  			}
  		})
  	})
  }

  ngOnInit() { }

}
