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


  constructor(
    public router: Router,
    public registerService: RegisterService
  ) {
    this.model = {};
  }

  ngOnInit() {
  }

  submitThings(){
    console.log("register submit");

    console.log(this.model);

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
            //this.authService.storeAdminData(data.token, data.admin);
            // this.flashMessagesService.show(
            //   'You are logged in',
            //   {
            //     cssClass: 'ui-messages-info',
            //     timeout: 3000
            //   }
            // );
            //this.router.navigate(['/register']);
          } else {
            console.log(data);
            //this.router.navigate(['/register']);
          }
        },
        (err: Error): void => {
          console.log(err);
        }
      );
    }
  }



}
