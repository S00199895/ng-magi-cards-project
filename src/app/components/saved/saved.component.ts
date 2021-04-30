import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { data } from 'jquery';
import { Observable } from 'rxjs';
import { FirestoreReadService } from '../services/firestore-read.service';
import { ScryfallApiService } from '../services/scryfall-api.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {
deckData;
  constructor(private fsService:FirestoreReadService, private _afs:AngularFirestore) {}

  ngOnInit(): void {
  }

  searchForDeck(name) {
    this.fsService.getDeck(name).subscribe(deckData => {
      this.deckData = deckData;
    })
  }

  deleteCard(cardName, deckName) {
    //deleting all cards in a deck deletes the deck
    this._afs.collection(deckName).doc(cardName).delete()
  }

}
