import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ScryfallApiService } from './scryfall-api.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreReadService {
  allCardsFromFS: Observable<any>;
  deck;
  cards;



  constructor(private _firestore: AngularFirestore, private _api: ScryfallApiService) { }

  getDeck(deck):Observable<any> {
    //call a method to get the path from snapshot chages saved in our json
    //make it return rhe path to this method
    //store both in an array to be returned to the saved component?
    this.allCardsFromFS = this._firestore.collection(deck).snapshotChanges();
    this.allCardsFromFS.subscribe(
      data => this.allCardsFromFS = data
    )
    return this.allCardsFromFS;
  }
}
