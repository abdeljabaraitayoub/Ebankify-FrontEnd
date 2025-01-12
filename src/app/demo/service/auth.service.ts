import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  helper = new JwtHelperService();
  claims : any;
  token : string;

  constructor(private http : HttpClient) { 
    this.token = localStorage.getItem('token');
  }

  login(data){
    return this.http.post('/login',data);
  }

  register(data){
    return this.http.post('/register',data);
  }

  logout(){
    localStorage.removeItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  setToken(token){
    localStorage.setItem('token',token);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getClaims(){
    return this.helper.decodeToken(this.token);
  }



  
}
