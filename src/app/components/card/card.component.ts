import { APP_ID, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ScryfallApiService} from '../services/scryfall-api.service'
import {AngularFirestoreCollection, AngularFirestore, CollectionReference, DocumentReference} from '@angular/fire/firestore';
//import * as admin from 'firebase-admin';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardData;
  decks:AngularFirestoreCollection;
  deckName;

  constructor(private _api: ScryfallApiService, private router: Router, private firestore:AngularFirestore) 
  {
    this.cardData = this.router.getCurrentNavigation().extras.state;

    //this.cardDataCollection = firestore.collection("cards");
    
    //now get that card and allow it to be saved to firestore
    //under the cards (or on another page 'Saved component' if you want extras.state)
    //display the list of firestore cards and their details
    //allow them to be deleted
   }

  ngOnInit(): void {
    var data = this.cardData;
    const card = data.data;
    this.cardData = card
    
    this.showDecks();

  }

  addLand(color, amount) {

    //get land id from color
    const landIds = {
      green : "dfaf517f-86a1-45eb-bd71-e0bffb610396",
      red : "9660fb20-f499-4f7a-9f25-e463f095ab90",
      blue : "c96f9fb6-ef52-43f9-a458-8602a7c83333",
      white : "abadcf9e-46ed-4a8b-888c-0cd3756bc8ab",
      black : "13bd1c69-2561-4ff1-af00-bb519b3897c2"
    };

    switch (color) {
      case "green":
        color = landIds.green;
        break;
      case "red":
        color = landIds.red;
        break;
      case "blue":
        color = landIds.blue;
        break;
      case "white":
        color = landIds.white;
        break;
      case "black":
        color = landIds.black;
        break;
    }

    var landCard = this._api.getCards("", color);

    for (let i = 0; i < amount; i++) {
      this.firestore.collection(this.deckName).add(landCard);
      
    }
  }

   showDecks() {
    // this.decks = this.firestore.collection("cards").valueChanges()
    // this.decks.subscribe(
    //   data => console.log(JSON.stringify(data))
    // ) 
    // console.log(this.decks)

    //this._api.getCards()
  }

  saveCard(data, deckName) {
    //need to be able to get indiviual documents and their separate cRDS IN THE array
    //need a methodto retieve document names (id maybe?) for combobox for selecting dekcs
    //finish designing bootstrap (maybe figure out why everythings small)
    //Dispaly decks in card cmponent ngFor with their names and the cards

    //maye add functionality to add land cards to a deck with a combo box
    data = JSON.parse(JSON.stringify(this.cardData))

    this.firestore.collection(deckName).doc(data.name).set(data);
    //console.log(admin.firestore().listCollections());
}

  newDeck(name) {
    //this.firestore.collection("cards").doc(name).set();

  }

}
