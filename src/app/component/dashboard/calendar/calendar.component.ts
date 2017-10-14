import { Component, OnInit,ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef) { }
  events: any[];
  header: any;
  event: MyEvent;
  dialogVisible: boolean = false;
  idGen: number = 100;

  ngOnInit() {
    this.header = {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		};
    this.events = [
      {
          "title": "All Day Event",
          "start": "2016-01-01"
      },
      {
          "title": "Long Event",
          "start": "2016-01-07",
          "end": "2016-01-10"
      },
      {
          "title": "Repeating Event",
          "start": "2016-01-09T16:00:00"
      },
      {
          "title": "Repeating Event",
          "start": "2016-01-16T16:00:00"
      },
      {
          "title": "Conference",
          "start": "2016-01-11",
          "end": "2016-01-13"
      }
  ];
  }

  handleDayClick(event) {
    this.event = new MyEvent();
    this.event.start = event.date.format();
    this.dialogVisible = true;
    
    //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
    this.cd.detectChanges();
}

handleEventClick(e) {
  this.event = new MyEvent();
  this.event.title = e.calEvent.title;
  
  let start = e.calEvent.start;
  let end = e.calEvent.end;
  if(e.view.name === 'month') {
      start.stripTime();
  }
  
  if(end) {
      end.stripTime();
      this.event.end = end.format();
  }

  this.event.id = e.calEvent.id;
  this.event.start = start.format();
  this.event.allDay = e.calEvent.allDay;
  this.dialogVisible = true;
}

}



export class MyEvent {
  id: number;
  title: string;
  start: string;
  end: string;
  allDay: boolean = true;
}
