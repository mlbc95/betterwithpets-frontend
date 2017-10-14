import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any;

  constructor(
    public authService: AuthService
  ) { 
    this.model = {};
  }

  ngOnInit() {
  }

  submitForm(){
    console.log("submit this form");
    console.log(this.model);
    this.authService.login(this.model);
  }
}
