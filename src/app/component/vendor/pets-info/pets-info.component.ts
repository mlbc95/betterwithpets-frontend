import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../services/http/http-service.service';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-pets-info',
  templateUrl: './pets-info.component.html',
  styleUrls: ['./pets-info.component.css']
})
export class PetsInfoComponent implements OnInit {

  defaultImgPath: string;
  visiblePets: any[];
  useDefault: boolean;

  constructor(
    public httpService: HttpService,
    public _DomSanitizer: DomSanitizer
  ) {
    this.defaultImgPath = 'assets/image/ragamuffin.png';
    this.httpService.get('pets/getPets/', {'Content-Type':'application/json'})
      .subscribe(data => {
        for(var i = 0; i < data.pets.length; i++){
          if(!data.pets[i].details.photo){
            data.pets[i].useDefault = true;
          }
          else{
            data.pets[i].useDefault = false;
          }
        }
        this.visiblePets = data.pets;
        console.log(this.visiblePets);
      });
  }

  ngOnInit() {
  }

}
