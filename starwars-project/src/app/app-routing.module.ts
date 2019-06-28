import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { NavesComponent } from './naves/naves.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CharacterdetailsComponent } from './characterdetails/characterdetails.component';
import { ShipdetailsComponent } from './shipdetails/shipdetails.component';

const routes: Route[] = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'personagens', component: PersonagensComponent },
  {path: 'naves', component: NavesComponent },
  {path: 'characterdetails', component: CharacterdetailsComponent },
  {path: 'shipdetails', component: ShipdetailsComponent },
  {path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
