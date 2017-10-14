import {NgModule, Component, OnInit, Input} from "@angular/core";
import {Router} from "@angular/router";
import {Location} from '@angular/common';
import { CommonModule } from "@angular/common";


@Component({
  selector: 'maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit{

  @Input()
  title : string;
  @Input()
  lat: number;
  @Input()
  lng: number;
  @Input()
  zoom: number;
  @Input()
  markers: any[];

  constructor(
    private router: Router,
    private _location: Location)
  {

  }

  goBack(){
    // this.router.navigate(['portal/gasMileage']);
    this._location.back();
  }

  ngOnInit(){
    // console.log(this.markers); //inputs are to be accessed in ngOnInit()
  }
}
