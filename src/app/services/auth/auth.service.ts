import { Injectable } from '@angular/core';
import {HttpService} from '../http/http-service.service';

@Injectable()
export class AuthService {

  constructor(
    public httpService: HttpService,
  ) { }

  login(user:any){
    console.log(user);
    return this.httpService.post('users/login', user, {'Content-Type':'application/json'});
  }
}

