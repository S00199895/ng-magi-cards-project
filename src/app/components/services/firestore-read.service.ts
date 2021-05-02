import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ScryfallApiService } from './scryfall-api.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreReadService {
  allCardsFromFS: Observable<any>;



  constructor(private _firestore: AngularFirestore, private _api: ScryfallApiService) { }

  getDeck(deck):Observable<any> {
    this.allCardsFromFS = this._firestore.collection(deck).snapshotChanges();
    this.allCardsFromFS.subscribe(
      data => this.allCardsFromFS = data
    )
    return this.allCardsFromFS;
  }
}
