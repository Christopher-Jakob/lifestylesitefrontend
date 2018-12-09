import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  // swinger sign up show request city boolean
  swingercityrequestshow = false;

  toggleswingercityrequest(){
    this.swingercityrequestshow = !this.swingercityrequestshow;
  }


  constructor() { }

  // for scrolling to swinger and host sell sections

  scrolltosection(id){
    const el = document.getElementById(id);
    el.scrollIntoView({behavior: "smooth"});

  }


  ngOnInit() {
  }

}
