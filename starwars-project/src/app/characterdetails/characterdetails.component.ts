import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent implements OnInit {

  response: any;
  routeParam: any;
  personagem: [];
  url: any;
  paramValue: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {

    this.url = JSON.stringify(location);
    this.paramValue = this.url.substring();//falta pegar o ID da URL.

    

    console.log("isto é o que vemo no urlResponse " + this.paramValue);

    this.http.get('https://swapi.co/api/people/?search=')
      .subscribe((response) => {
        this.response = response;
        //console.log(this.response.results);
        this.personagem = this.response.results[0];


      });


  }
}
