import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit {

  response: any;
  personagens = [];
 
  constructor(private http: HttpClient) {  }

  ngOnInit() {

    this.http.get('https://swapi.co/api/people')
    .subscribe((response) => {
      this.response = response;
      
      console.log(this.response.results);
      this.personagens = this.response.results;
      console.log(this.personagens[0].name);

    }); 

  }

}
