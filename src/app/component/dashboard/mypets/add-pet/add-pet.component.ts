import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import {HttpService} from '../../../../services/http/http-service.service';
import {AuthService} from '../../../../services/auth/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {



  model: any;
  uploadedFiles: any[] = [];
  image: any;

  types: any[];
  selectedType: string;
  selectedTypes: string[] = [];
  categories: any[];
  selectedCategory: string;
  base64: string;

  constructor(
    public http: HttpService,
    public auth: AuthService,
    public router:Router,
  ) {
    this.model = {};
    this.model.details = {};
    this.model.details.age = {};
    this.model.details.photo = '';
    this.categories =[];
    this.categories.push({label:'Cat', value:'Cat'});
    this.categories.push({label:'Dog', value:'Dog'});
    this.categories.push({label:'Chameleon', value:'Chameleon'});
   }

  ngOnInit() {
  }


  createPet(){
    this.model.details.age = this.model.details.age;
    this.model.details.weight = this.model.details.weight;
    var pet = this.model;
    this.model.category = this.selectedCategory;
    var pet = this.model;
    console.log(pet);

    this.model.gender = (this.model.gender == true) ? "female" : "male";
    this.model.visible = (this.model.visible == true);

    this.http.post('pets/addpet', pet, {'Content-Type':'application/json', 'Authorization': this.auth.getToken()})
      .subscribe(data => {
        this.router.navigate(['/my-pets']);
        console.log(data);
      },
      error => {
        console.log(error);
      });

  }

  myUploader(event) {
    console.log(event.files);
    let reader = new FileReader();
    reader.onloadend = () => {
      this.model.details.photo = reader.result;
    };
    reader.readAsDataURL(event.files[0]);
   }

  clear() {
    this.selectedType = null;
    this.selectedTypes = [];
  }


}
