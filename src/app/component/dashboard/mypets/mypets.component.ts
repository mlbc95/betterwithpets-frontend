import {Component, OnInit, SecurityContext} from '@angular/core';
import {HttpService} from '../../../services/http/http-service.service';
import {AuthService} from '../../../services/auth/auth.service';
import {DomSanitizer} from "@angular/platform-browser";
import {SecureContext} from "tls";

@Component({
  selector: 'app-mypets',
  templateUrl: './mypets.component.html',
  styleUrls: ['./mypets.component.css']
})
export class MypetsComponent implements OnInit {

  userPets: any;
  currentUser: any;
  defaultImgPath: any;

  constructor(
    public httpService: HttpService,
    public authService: AuthService,
    public _DomSanitizer: DomSanitizer,
  ) {
    this.defaultImgPath = 'assets/image/ragamuffin.png';
    this.httpService.get('pets/getPetsByUser/' + this.authService.getCurrentUser()._id, {'Content-Type':'application/json'})
      .subscribe(data => {
        for(var i = 0; i < data.pets.length; i++){
          if(!data.pets[i].details.photo){
            data.pets[i].useDefault = true;
          }else{
            data.pets[i].useDefault = false;
          }
        }
        this.userPets = data.pets;
      });
  }

  ngOnInit() {
  }

}
