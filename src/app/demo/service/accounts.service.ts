import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http:HttpClient) { }

  getAccounts(){
    return this.http.get('/account');
  }
}
