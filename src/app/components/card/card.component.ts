import { Component, OnInit } from '@angular/core';
import {ScryfallApiService} from '../services/scryfall-api.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private _api: ScryfallApiService) { }

  ngOnInit(): void {
    //this._api.getCards()
  }

}
