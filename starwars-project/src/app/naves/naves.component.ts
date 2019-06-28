import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {

  response: any;
  naves = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://swapi.co/api/starships')
    .subscribe((response) => {
      this.response = response;
      
      console.log(this.response.results);
      this.naves = this.response.results;
      console.log(this.naves[0].name);

    }); 
  }

}
