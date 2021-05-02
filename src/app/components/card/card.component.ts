import { APP_ID, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ScryfallApiService} from '../services/scryfall-api.service'
import {AngularFirestoreCollection, AngularFirestore, CollectionReference, DocumentReference} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
//import * as admin from 'firebase-admin';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardData;
  landCardObject;


  constructor(private _api: ScryfallApiService, private router: Router, private firestore:AngularFirestore) 
  {
    this.cardData = this.router.getCurrentNavigation().extras.state;
   }

  ngOnInit(): void {
    var data = this.cardData;
    const card = data.data;
    this.cardData = card
    
  }

  //land is given a generated id in firestore
  addLand(amount, name) {
    
    const selectBar = document.getElementById('landSelect') as HTMLSelectElement;
    let color = selectBar.value;

    //get the option then switch and get the land
  
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
    landCard.subscribe(data => {
      console.log(data)
      this.landCardObject = data;

      for (let i = 0; i < amount; i++) {
        this.firestore.collection(name).add(this.landCardObject);
        console.log("added land " + i + name);
      }
      
    });

    
  }

  saveCard(data, deckName) {
    data = JSON.parse(JSON.stringify(this.cardData))

    this.firestore.collection(deckName).doc(data.name).set(data);

}

}
