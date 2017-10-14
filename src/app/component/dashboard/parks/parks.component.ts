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
    this.zoom = 5;
  }

  ngOnInit() {
  }

  createMarkers(){
    //api call here maybe
    return [
      {
        id: 'A',
        description: "here is some information",
        lat: 39.673858,
        lng: -91.815982
      },{
        id: 'B',
        description: "here is some information",
        lat: 38.673858,
        lng: -90.815982
      },{
        id: 'C',
        description: "here is some information",
        lat: 37.673858,
        lng: -89.815982
      }
    ]
  }
}
