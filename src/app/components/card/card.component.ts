import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ScryfallApiService} from '../services/scryfall-api.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardData;
  constructor(private _api: ScryfallApiService, private router: Router) 
  {
    this.cardData = this.router.getCurrentNavigation().extras.state;
    console.log('new component, card is ', this.cardData.data.name);
   }

  ngOnInit(): void {
    var data = this.cardData;
    const card = data.data;
    this.cardData = card
    
  }

}
