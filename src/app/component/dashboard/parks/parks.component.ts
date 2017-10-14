import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {

  markers: any[];
  zoom: number;

  constructor(
    private router: Router,
  ) {
    this.markers = this.createMarkers();
    this.zoom = 10;
  }

  ngOnInit() {
  }

  createMarkers(){
    //api call here maybe
    return [
      {
        id: '1',
        title: "Lucas Dog Park",
        description: "here is some information",
        lat: 38.631490,
        lng: -90.199680
      },{
        id: '2',
        title: "French Town Dog Park",
        description: "here is some information",
        lat: 38.610060,
        lng: -90.205450
      },{
        id: '3',
        title: "Benton Park West Dog Park",
        description: "here is some information",
        lat: 38.595778,
        lng: -90.231667
      }
    ]
  }
}
