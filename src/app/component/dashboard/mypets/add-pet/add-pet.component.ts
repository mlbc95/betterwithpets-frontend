import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import {HttpService} from '../../../../services/http/http-service.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

    categories: any[];
    selectedCategory: string;

    model: any;

  constructor(
    public http: HttpService
  ) {
    this.model = {};
    this.categories =[];
    this.categories.push({label:'Cat', value:'Cat'});
    this.categories.push({label:'Dog', value:'Dog'});
    this.categories.push({label:'Chameleon', value:'Chameleon'});
   }

  ngOnInit() {
  }


  createPet(){
    var pet = this.model;

    console.log("in create pet");
    this.http.post('pets/addpet', pet, {'Content-Type':'application/json'});

  }

}
