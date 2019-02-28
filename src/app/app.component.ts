import {Component, OnInit} from '@angular/core';
import {ShowHideService} from './services/controlservices/showhideservice/showhideservice';
import {Userservice} from './services/userservice/userservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShowHideService]
})
export class AppComponent implements OnInit{
  title = 'lifestylesite';


  constructor(private userservice: Userservice){}

  ngOnInit(){
    this.userservice.getlifestyleuser();
  }
}
