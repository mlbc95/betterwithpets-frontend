import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterService} from '../../services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any;
  vendor: any;

  constructor(
    public router: Router,
    public registerService: RegisterService
  ) {
    this.model = {};
    this.vendor = {};
  }

  ngOnInit() {
  }

  submitThings(){
    if(this.model.password === this.model.confirmPassword){
      var user = {
        email: this.model.username,
        password: this.model.password,
        firstName: this.model.firstName,
        lastName: this.model.lastName,
      };

      this.registerService.registerNewUser(user).subscribe(
        (data: any): void => {
          if(data.success) {
            console.log("res");
            console.log(data.success);
            this.router.navigate(['/login']);
          } else {
            console.log(data);
            this.router.navigate(['/register']);
          }
        },
        (err: Error): void => {
          console.log(err);
        }
      );
    }
  }

  submitThingsForVendor(){
    if(this.vendor.password === this.vendor.confirmPassword){
      var vendor = {
        companyName: this.vendor.companyName,
        firstName: this.vendor.firstName,
        lastName: this.vendor.lastName,
      };

      this.registerService.registerNewUser(vendor).subscribe(
        (data: any): void => {
          if(data.success) {
            console.log("res");
            console.log(data.success);
            this.router.navigate(['/login']);
          } else {
            console.log(data);
            this.router.navigate(['/register']);
          }
        },
        (err: Error): void => {
          console.log(err);
        }
      );
    }
  }



}
