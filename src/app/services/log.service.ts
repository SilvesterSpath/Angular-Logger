import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

import {Log} from '../models/log'

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logs: Log[];

  constructor() {
    this.logs = [{id: '1', text: 'Generated components', date: new Date('07/26/2021 12:54:23')},
    {id: '2', text: 'Added Bootstrap', date: new Date('07/27/2021 9:33:14')},
    {id: '3', text: 'Added logs component', date: new Date('07/28/2021 13:43:51')}]
  }

  getLogs() {
    return this.logs
  }
}
