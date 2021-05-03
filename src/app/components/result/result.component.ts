import {ScryfallApiService} from '../services/scryfall-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {

cards = [];


  constructor(private _api: ScryfallApiService, private route:Router) { }

  ngOnInit(): void {

  }


  cardsOnClick(query:string) {
    //get the selected value
    const selectBar = document.getElementById('selectBar') as HTMLSelectElement;
    var selectedOption = selectBar.value;

    const sortBtn = document.getElementById('sortBtn') as HTMLInputElement;
    var IsChecked = sortBtn.checked;

    let searchParam

    

    if (IsChecked) 
    {
      searchParam = "search?order=" + selectedOption + "&dir=asc" + "&q=";
    } 
    else 
    {
      searchParam = "search?order=" + selectedOption + "&dir=desc" + "&q=";
    }

    console.log(searchParam + query);
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
