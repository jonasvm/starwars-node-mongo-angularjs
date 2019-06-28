import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  usuario: string = "";
  senha: string = "";

  usuarioAPI: string = "";
  senhaAPI: string = "";

  response: any;
  autenticated: boolean = false;

  constructor(private http: HttpClient, private router: Router){}

  ngOnInit(){   }

  login() {
     this.http.get('http://192.168.24.139:3000/?user_name=admin&password=admin')
    .subscribe((response) => {
      this.response = response;

      this.usuarioAPI = this.response[0]["user_name"];
      this.senhaAPI = this.response[0]["password"]

      if(this.usuario !== this.usuarioAPI && this.senha !== this.senhaAPI){
        alert("Usuário ou senha incorretos!");
      }else{
        this.autenticated = true;
      }
    }); 
  }

}
