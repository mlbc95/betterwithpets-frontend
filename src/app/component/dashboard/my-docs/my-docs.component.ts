import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-docs',
  templateUrl: './my-docs.component.html',
  styleUrls: ['./my-docs.component.css']
})
export class MyDocsComponent implements OnInit {

  docs: any[];
  uploadedFiles: any[] = [];
  uploadImg: string;
  model:any;
  display1: boolean = false;
  display2: boolean = false;


  constructor() {
    this.docs = this.getExampleDocs();
  }

  ngOnInit() {
  }

  myUploader(event) {
    console.log(event.files);
    let reader = new FileReader();
    reader.onloadend = () => {
      this.uploadImg = reader.result;
    };
    reader.readAsDataURL(event.files[0]);
  }


  showDialog(docNumber){
    console.log(docNumber);

    if(docNumber == 1){
      this.display1 = true;
    }else if(docNumber == 2){
      this.display2 = true;
    }


  }

  getExampleDocs(){
    return [
      {
        name:"doc1",
        shortDescription:"no doc like the first",
        dateAdded:"10-15-2017",
        docNumber: 1
      },
      {
        name:"doc2",
        shortDescription:"except maybe the second",
        dateAdded:"10-11-2017",
        docNumber: 2
      }
    ];
  }





}
