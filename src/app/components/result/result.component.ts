import {ScryfallApiService} from '../services/scryfall-api.service';
import {EventEmitter} from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

//Implement the Sort by button
//try not to add a 3rd parameter to the api method. itll be an effort
//maybe concatenate or format the search query parameter to do include the sorting
//look at report to see when I need to start it

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {
@Output() public emitter = new EventEmitter()

cards = [];


  constructor(private _api: ScryfallApiService, private route:Router) { }

  ngOnInit(): void {

  }

  navToCard(card) {
  }

  cardsOnClick(query:string) {
    const searchParam = "search?q="
    this._api.getCards(searchParam, query).subscribe((data) => {
      console.log(data);
      this.cards = data['data']

    });
  }

  getRandomCard() : void {
    const rand = "random";
    this._api.getCards("", rand).subscribe((data) => {
      this.cards[0] = data
    });
  }

}
