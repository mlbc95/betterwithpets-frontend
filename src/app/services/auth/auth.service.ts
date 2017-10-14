import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  login(user:any){
    console.log(user);
  }
}

