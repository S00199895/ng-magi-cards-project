import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ResultComponent } from './components/result/result.component';
import * as $ from 'jquery';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SavedComponent } from './components/saved/saved.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    SavedComponent,
    CardComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
