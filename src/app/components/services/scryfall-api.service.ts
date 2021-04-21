import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScryfallApiService {
url = "https://api.scryfall.com/cards/";

  constructor(private httpClient: HttpClient) { }

  public getCards(search, query) {
    return this.httpClient.get(this.url+search+query);
  }
}
