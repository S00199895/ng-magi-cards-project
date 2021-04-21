import {ScryfallApiService} from '../services/scryfall-api.service';
import {EventEmitter} from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';



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
    //input into card component. it then searches again with the id,
    //returns a card and itss info, save, below is the saved on firebase
    //maybe pass the whole object instead?
  }

  cardsOnClick(query:string) {
    const searchParam = "search?q="
    this._api.getCards(searchParam, query).subscribe((data) => {
      console.log(data);
      this.cards = data['data']
      console.log(this.cards.length)

    });
  }

  getRandomCard() : void {
    const rand = "random";
    this._api.getCards("", rand).subscribe((data) => {
      console.log(data);
      console.log(this.cards);
      this.cards[0] = data
      console.log(this.cards.length)
    });
  }

}
