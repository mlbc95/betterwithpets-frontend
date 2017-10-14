import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import {HttpService} from '../../../../services/http/http-service.service';
import {AuthService} from '../../../../services/auth/auth.service';


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

  constructor(
    public http: HttpService,
    public auth: AuthService,
  ) {
    this.model = {};
    this.model.details = {};
    this.model.details.age = {};
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
    
    console.log(this.model.gender);

    this.model.gender = (this.model.gender == true) ? "female" : "male";
    this.model.visible = (this.model.visible == true);

    console.log(this.model);
    this.http.post('pets/addpet', pet, {'Content-Type':'application/json',
                                        'Authorization': this.auth.getToken()})
      .subscribe(data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });

  }

  onUpload(event) {
    this.uploadedFiles.push(event.files[0]);
  }

  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
    };
    myReader.readAsDataURL(file);
    console.log(myReader.readAsDataURL(file));
  }







  clear() {
    this.selectedType = null;
    this.selectedTypes = [];
  }


}
