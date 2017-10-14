import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../services/http/http-service.service';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-mypets',
  templateUrl: './mypets.component.html',
  styleUrls: ['./mypets.component.css']
})
export class MypetsComponent implements OnInit {

  userPets: any;
  currentUser: any;

  constructor(
    public httpService: HttpService,
    public authService: AuthService,
  ) {

    this.httpService.get('pets/getPetsByUser/' + this.authService.getCurrentUser()._id, {'Content-Type':'application/json'})
      .subscribe(data => {
        this.userPets = data.pets;
        console.log(this.userPets);
      });
  }

  ngOnInit() {
  }

}
