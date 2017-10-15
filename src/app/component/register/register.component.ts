import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterService} from '../../services/register/register.service';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any;
  vendor: any;
  types: SelectItem [];
  type: string;

  constructor(
    public router: Router,
    public registerService: RegisterService
  ) {
    this.model = {};
    this.vendor = {};
    this.vendor.types = [];
    this.vendor.types.push({label:"Vet", value:"Vet"});
    this.vendor.types.push({label:"Grooming", value:"Grooming"});
    this.vendor.types.push({label:"Daycare", value:"Daycare"});
    
    
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
      console.log(vendor);
      console.log(this.vendor);
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
