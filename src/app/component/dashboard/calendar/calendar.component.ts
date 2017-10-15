import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {HttpService} from '../../../services/http/http-service.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef, private http:Http, private httpService: HttpService) { }
  events: any[];
  header: any;
  vendors:any[];
  businessName:any[]=[]
  event: MyEvent;
  dialogVisible: boolean = false;
  idGen: number = 100;
  pets:any[];
  petName:any[]=[];
  user:any;
  description:string;
  serviceType:any[]=[
    {label:"Grooming",value:"Grooming"},
    {label:"Vet",value:"Vet"},
    {label:"Day Care", value:"Day Care"}
  ]

  userToken: string;

  ngOnInit() {
    this.userToken = localStorage.getItem('id_token')
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

       this.user = JSON.parse(localStorage.getItem("user"))

        this.http.get("https://betterwithpets-server.herokuapp.com/pets/getPetsByUser/" + this.user._id ).map(res=>{
            return res.json()
        })
        .subscribe(data =>{
            this.pets =data.pets;
            console.log(this.pets)
            for(let i in this.pets)
                {
                    this.petName.push({label:this.pets[i].name, 
                                        value:this.pets[i]._id});
                }
            
        })

        this.httpService.get("events/getEventsByUser/"+this.user._id,{}).subscribe(data=>{
            console.log(data)
            this.events =data.events;
        })
 

  }

  handleDayClick(event) {
    this.event = new MyEvent();
    console.log("test")
    //  this.event.date = event.date.format();
    this.dialogVisible = true;
    
    //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
    this.cd.detectChanges();
}

handleEventClick(e) {
   this.event = new MyEvent();
   this.event.title = e.calEvent.title;
  
   let start = e.calEvent.start;
//   let end = e.calEvent.end;
//   if(e.view.name === 'month') {
//       start.stripTime();
//   }
  
//   if(end) {
//       end.stripTime();
//       this.event.end = end.format();
//   }


  this.event.date = start.format();
  this.dialogVisible = true;
}

saveEvent() {
  this.httpService.post('events/addEvent', this.event, {'Content-Type':'application/json', 'Authorization': this.userToken})
        .subscribe(
            (data: any) => {
                console.log(data);
                if(data.success){
                 this.updateCal();
                }
            }
        )
    console.log(this.event)
    
  
        this.event = null;
    
    this.dialogVisible = false;
}

updateCal(){
    this.httpService.get("events/getEventsByUser/"+this.user._id,{}).subscribe(data=>{
        console.log(data)
        this.events =data.events;
    })

}
}



export class MyEvent {
  vendorId: string;
  date:string;
  title:string;
  petId:string;
  type: string;
  description:string;
}
