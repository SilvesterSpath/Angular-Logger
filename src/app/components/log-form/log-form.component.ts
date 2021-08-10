import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  @Input() text='';

  constructor() { }

  ngOnInit(): void {
  }

}
