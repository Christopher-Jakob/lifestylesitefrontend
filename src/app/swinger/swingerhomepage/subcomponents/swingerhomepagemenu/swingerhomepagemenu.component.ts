import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swingerhomepagemenu',
  templateUrl: './swingerhomepagemenu.component.html',
  styleUrls: ['./swingerhomepagemenu.component.css']
})
export class SwingerhomepagemenuComponent implements OnInit {

  constructor() { }

  upcomingevents = [
    {
      eventname: 'Sexy Event Name',
      date: '12-31-18',
      time: '7pm'
    },
    {
      eventname: 'Sexy Event Name',
      date: '12-31-18',
      time: '7pm'
    },
    {
      eventname: 'Sexy Event Name',
      date: '12-31-18',
      time: '7pm'
    },
    {
      eventname: 'Sexy Event Name',
      date: '12-31-18',
      time: '7pm'
    },

  ];

  ngOnInit() {
  }

}
