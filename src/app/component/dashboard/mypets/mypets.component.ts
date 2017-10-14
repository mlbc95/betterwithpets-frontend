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

  constructor(
    public httpService: HttpService,
    public authService: AuthService,
    public _DomSanitizer: DomSanitizer,
  ) {

    this.httpService.get('pets/getPetsByUser/' + this.authService.getCurrentUser()._id, {'Content-Type':'application/json'})
      .subscribe(data => {

        // console.log(data );
        // this._sanitizer.sanitize(SecurityContext.URL, data.pets[0].details.photo);

        this.userPets = data.pets;
        console.log(this.userPets);
      });
  }

  ngOnInit() {
  }

}
