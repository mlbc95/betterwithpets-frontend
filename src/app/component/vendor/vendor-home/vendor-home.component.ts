import { Component, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {HttpService} from '../../../services/http/http-service.service';

@Component({
  selector: 'app-vendor-home',
  templateUrl: './vendor-home.component.html',
  styleUrls: ['./vendor-home.component.css']
})
export class VendorHomeComponent implements OnInit {
  events: any[];
  header: any;
  user:any;
  userToken: string;
  constructor(private http:Http, private httpService: HttpService) { }

  ngOnInit() {
this.user= JSON.parse(localStorage.getItem('user'))
    this.userToken = localStorage.getItem('id_token')
    this.header = {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
        };
        
        

        this.httpService.get("events/getEventsByVendor/"+this.user._id,{}).subscribe(data=>{
            console.log(data)
            this.events =data.events;
        })
 

  }

}
