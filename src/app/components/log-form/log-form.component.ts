import { Component, OnInit, Input } from '@angular/core';

import { LogService } from 'src/app/services/log.service';

import {Log} from '../../models/log'

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
 /*  @Input() text = ''; */
  id: string;
  text: string;
  date: any;

  isNew: boolean = true;

  constructor(private logService: LogService) {
    this.id = '';
    this.text = '';
    this.date = null;    
   }

  ngOnInit(): void {
    // Subscribe to the selectedLog observable
    this.logService.selectedLog.subscribe(i => {
      if (i.id != '') {
        this.isNew = false;
        this.id = i.id;
        this.text = i.text;
        this.date = i.date
      }
    });    
  }

  onSubmit() {
    // Check if new log
    if (this.isNew) {
      // Create a new log
      const newLog = {
        id: this.generateId(),
        text: this.text,
        date: new Date()
      }
      // Add log
      this.logService.addLog(newLog)
    } else {
      // Update log
      const updLog = {
        id: this.id,
        text: this.text,
        date: new Date()
      }
      // Update Log
      this.logService.updateLog(updLog)
    }    
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
