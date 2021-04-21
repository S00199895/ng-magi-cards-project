import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CardComponent } from './components/card/card.component';
import {ResultComponent} from './components/result/result.component';
import { SavedComponent } from './components/saved/saved.component';

const routes: Routes = [
  {path: '', component: ResultComponent},
  {path: 'saved', component: SavedComponent},
  {path: 'card', component: CardComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
