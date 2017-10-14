import { Injectable } from '@angular/core';
import {HttpService} from '../http/http-service.service';

@Injectable()
export class RegisterService {

  constructor(
    public httpService: HttpService,
  ) { }

  registerNewUser(user){
    return this.httpService.post('users/register', user, {'Content-Type':'application/json'});
  }

}
