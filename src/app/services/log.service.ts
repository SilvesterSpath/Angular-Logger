import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Observable } from 'rxjs';
import {of} from 'rxjs'

import {Log} from '../models/log'

@Injectable({
  providedIn: 'root'
})
  
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({ id: '', text: '', date: '' })
  
  selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable()

  constructor() {
    this.logs = [{id: '1', text: 'Generated components', date: new Date('07/26/2021 12:54:23')},
    {id: '2', text: 'Added Bootstrap', date: new Date('07/27/2021 9:33:14')},
    {id: '3', text: 'Added logs component', date: new Date('07/28/2021 13:43:51')}]
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log)
  }

  addLog(log: Log) {
    this.logs.unshift(log)
  }

  updateLog(log: Log) {
    this.logs.forEach((i, idx) => {
      if (i.id === log.id) {
        this.logs.splice(idx, 1)
      } 
    })
    this.logs.unshift(log)
  }

  deleteLog(log: Log) {
    this.logs.forEach((i, idx) => {
      if (i.id === log.id) {
        this.logs.splice(idx, 1)
      } 
    })
    
  }

  clearState() {
    this.stateSource.next(true)
  }
}
