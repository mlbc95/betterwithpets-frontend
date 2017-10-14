import { Injectable } from '@angular/core';
import {HttpService} from '../http/http-service.service';

@Injectable()
export class EventsService {

  constructor(public httpService: HttpService) { }

  addEvent(data)
  {
    const token = localStorage.getItem('id_token');
    return this.httpService.post("/events/addEvent",data,token)
  }


}
