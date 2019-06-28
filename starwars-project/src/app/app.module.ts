import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { NavesComponent } from './naves/naves.component';
import { CharacterdetailsComponent } from './characterdetails/characterdetails.component';
import { ShipdetailsComponent } from './shipdetails/shipdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonagensComponent,
    NavesComponent,
    PageNotFoundComponent,
    CharacterdetailsComponent,
    ShipdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
