import { Injectable } from '@angular/core';
import {HttpService} from '../http/http-service.service';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  product: any;
  customer: any;

  constructor(
    public httpService: HttpService,
  ) { }

  login(user:any){
    console.log(user);
    return this.httpService.post('users/login', user, {'Content-Type':'application/json'});
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getCurrentUser(){
    console.log(localStorage.getItem('user'));
    return JSON.parse(localStorage.getItem('user'))
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired();
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}

