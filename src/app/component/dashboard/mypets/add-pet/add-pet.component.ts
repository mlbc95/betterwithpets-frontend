import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

    categories: any[];
    selectedCategory: string;

    model: any;

  constructor() {
    this.model = {};
    this.categories =[];
    this.categories.push({label:'Cat', value:'Cat'});
    this.categories.push({label:'Dog', value:'Dog'});
    this.categories.push({label:'Chameleon', value:'Chameleon'});
   }

  ngOnInit() {
  }

}
