import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../../services/http/http-service.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  model: any;

  constructor(
    public http: HttpService
  ) { }

  ngOnInit() {
  }


  createPet(){
    var pet = this.model;

    console.log("in create pet");
    this.http.post('pets/addpet', pet, {'Content-Type':'application/json'});

  }

}
