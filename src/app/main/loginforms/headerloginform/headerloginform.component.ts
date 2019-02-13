import { Component, OnInit } from '@angular/core';
import {ShowHideService} from '../../../services/controlservices/showhideservice/showhideservice';

@Component({
  selector: 'app-headerloginform',
  templateUrl: './headerloginform.component.html',
  styleUrls: ['./headerloginform.component.css']
})
export class HeaderloginformComponent implements OnInit {

  constructor(private showhideservice: ShowHideService) { }

  // send landing page login form show hide command
  sendshowhidecommand(){
    this.showhideservice.sendchangelandingpageloginshowhide();
  }

  ngOnInit() {
  }

}
