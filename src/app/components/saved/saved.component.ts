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
  constructor(private fsService:FirestoreReadService) {}

  ngOnInit(): void {
  }

  searchForDeck(name) {
    this.fsService.getDeck(name).subscribe(deckData => {
      this.deckData = deckData;
    })
  }

}
