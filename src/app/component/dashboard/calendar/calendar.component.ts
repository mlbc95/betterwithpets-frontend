import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef, private http:Http) { }
  events: any[];
  header: any;
  vendors:any[];
  businessName:any[]=[]
  event: MyEvent;
  dialogVisible: boolean = false;
  idGen: number = 100;
  pets:any[];

  ngOnInit() {
    this.header = {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
        };
        
        this.http.get("https://betterwithpets-server.herokuapp.com/vendors").map(res =>{ return res.json()})
        .subscribe(data=>{
            console.log(data.vendors)
            this.vendors = data.vendors
            console.log(this.vendors)

            for(let i in this.vendors)
                {
                    this.businessName.push({label:this.vendors[i].businessName, 
                                                value:this.vendors[i]._id});
                   

                }
        })

       var user = JSON.parse(localStorage.getItem("user"))

        this.http.get("https://betterwithpets-server.herokuapp.com/getPetsByUser/" + user._id ).map(res=>{
            return res.json()
        })
        .subscribe(data =>{
            this.pets =data;
            
        })
 

  }

  handleDayClick(event) {
    this.event = new MyEvent();
    // this.event.start = event.date.format();
    this.dialogVisible = true;
    
    //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
    this.cd.detectChanges();
}

handleEventClick(e) {
//   this.event = new MyEvent();
//   this.event.title = e.calEvent.title;
  
//   let start = e.calEvent.start;
//   let end = e.calEvent.end;
//   if(e.view.name === 'month') {
//       start.stripTime();
//   }
  
//   if(end) {
//       end.stripTime();
//       this.event.end = end.format();
//   }

//   this.event.id = e.calEvent.id;
//   this.event.start = start.format();
//   this.event.allDay = e.calEvent.allDay;
//   this.dialogVisible = true;
}

}



export class MyEvent {
  vendorId: string;
  petId:string;
  type: string;
  description:string;
  duration:{
      amount: number;
      unit:number;
   }
}
