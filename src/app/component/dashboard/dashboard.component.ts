import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  markers: any[];
  zoom: number;
  marker: any = {};

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
        label: 'label1',
        description: "here is some information",
        lat: 39.673858,
        lng: -91.815982
      },{
        id: 'B',
        label: 'label2',
        description: "here is some information",
        lat: 38.673858,
        lng: -90.815982
      },{
        id: 'C',
        label: 'label3',
        description: "here is some information",
        lat: 37.673858,
        lng: -89.815982
      }
    ]
  }
}
