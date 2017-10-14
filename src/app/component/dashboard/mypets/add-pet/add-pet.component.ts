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
    this.categories =[];
    this.categories.push({label:'Cat', value:'Cat'});
    this.categories.push({label:'Dog', value:'Dog'});
    this.categories.push({label:'Chameleon', value:'Chameleon'});
   }

  ngOnInit() {
  }


  createPet(){
    var pet = this.model;
    console.log(this.uploadedFiles);
    console.log(this.selectedTypes);
    console.log(this.model);
    console.log(this.auth.getToken());
    this.model.category = this.selectedCategory;

    console.log("in create pet");
    // this.readThis();
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
