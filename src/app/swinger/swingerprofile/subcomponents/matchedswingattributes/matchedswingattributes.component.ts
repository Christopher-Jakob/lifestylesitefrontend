import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matchedswingattributes',
  templateUrl: './matchedswingattributes.component.html',
  styleUrls: ['./matchedswingattributes.component.css']
})
export class MatchedswingattributesComponent implements OnInit {

  constructor() { }

  swingtypes = [
    {
      type: 'Soft Swap'
    },
    {
      type:'Hard Swap'
    },
    {
      type: 'Soft Swap'
    },
    {
      type:'Hard Swap'
    },
    {
      type: 'Soft Swap'
    },
    {
      type:'Hard Swap'
    },
    {
      type: 'Soft Swap'
    },
    {
      type:'Hard Swap'
    }

  ];

  ngOnInit() {
  }

}
