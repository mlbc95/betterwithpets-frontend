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
    const thing = {
      credentials: {
        email: this.model.username,
        password: this.model.password
      }
    };

    this.authService.login(thing).subscribe(
      (data: any): void => {
        if(data.success) {
          console.log(data.success);
          //this.authService.storeAdminData(data.token, data.admin);
          // this.flashMessagesService.show(
          //   'You are logged in',
          //   {
          //     cssClass: 'ui-messages-info',
          //     timeout: 3000
          //   }
          // );
          // this.router.navigate(['/register']);
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
