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

  eventhosts = [
    {
      name: 'Young Couples Party',
    },
    {
      name: 'Invite Only'
    },
    {
      name: 'Cool Ass Party Place'
    }
  ];

  usergroups = [
    {
      name: 'Orgies On Tuesday'
    },
    {
      name: 'Something Every Friday'
    },
    {
      name: 'We like cars'
    }
  ];

  ngOnInit() {
  }

}
