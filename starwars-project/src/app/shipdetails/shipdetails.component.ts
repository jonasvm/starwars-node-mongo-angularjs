import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shipdetails',
  templateUrl: './shipdetails.component.html',
  styleUrls: ['./shipdetails.component.css']
})
export class ShipdetailsComponent implements OnInit {
  
  response: any;
  routeParam: any;
  nave: [];
  url: any;
  paramValue: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {

    this.url = JSON.stringify(location);
    this.paramValue = this.url.substring();//falta pegar o ID da URL.

    

    console.log("isto é o que vemo no urlResponse " + this.paramValue);

    this.http.get('https://swapi.co/api/starships/?search=')
      .subscribe((response) => {
        this.response = response;
        //console.log(this.response.results);
        this.nave = this.response.results[0];


      });

  }

}
