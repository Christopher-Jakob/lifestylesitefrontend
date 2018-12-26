import { Component, OnInit } from '@angular/core';
import {Httpservice} from '../../services/httpservice/httpservice';
import {countriesbystatus} from '../../urls/siteadminurls/settingsurls/countryurls/countryurls';
import {NgForm} from '@angular/forms';
import {stateandcitybystatus} from '../../urls/siteadminurls/settingsurls/stateandcityurls/stateandcityurls';
import {swingtypeallorcreate} from '../../urls/siteadminurls/settingsurls/swingtypeurls/swingtypeurls';
import {hosttypeallorcreate} from '../../urls/siteadminurls/settingsurls/hosttypeurls/hosttypeurls';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
  providers: [Httpservice]
})
export class LandingpageComponent implements OnInit {

  constructor(private http: Httpservice) { }
  // swinger sign up show request city boolean
  swingercityrequestshow = false;

  toggleswingercityrequest(){
    this.swingercityrequestshow = !this.swingercityrequestshow;
  }

  // swinger sign up code
  activecountries = [];
  allcountries = [];
  allstates = [];
  allcities = [];
  activestates = [];
  activecities = [];
  swingertypes = [];
  hosttypes = [];

  //get active states by country
  getactivestatesbycountry(form:NgForm){
    let country = null;
    if(form.value.countryswinger != null){
      country = form.value.countryswinger;
    }
    if(form.value.countryhost != null){
      country = form.value.countryhost;
    }
    const url = stateandcitybystatus + 'state/' + String(country) + '/' + 'active';
    this.http.get(url)
      .subscribe(
        (req: any)=>{
          this.activestates = req;
        }
      );
  }

  getallstatesbycountry(form:NgForm){
    let country = null;
    if(form.value.countryswingerrequest != null){
      country = form.value.countryswingerrequest;
    }
    if(form.value.countryhostrequest != null){
      country = form.value.countryhostrequest;
    }

    const url = stateandcitybystatus + 'state/' + String(country) + '/' + 'all';
    this.http.get(url)
      .subscribe(
        (req: any)=>{
          this.allstates = req;
        }
      );
  }

  getactivecitiesbystate(form:NgForm){
    let state = null;
    if(form.value.stateswinger !=null){
      state = form.value.stateswinger;
    }
    if(form.value.statehost != null){
      state = form.value.statehost
    }
    const url = stateandcitybystatus + 'city/' + String(state) + '/' + 'active';
    this.http.get(url)
      .subscribe(
        (req: any)=>{
          this.activecities = req;
        }
      );
  }

  getallcitiesbystate(form:NgForm){
    let state = null;
    if(form.value.stateswingerrequest != null){
      state = form.value.stateswingerrequest;
    }
    if(form.value.statehostrequest != null){
      state = form.value.statehostrequest;
    }
    const url = stateandcitybystatus + 'city/' + String(state) + '/' + 'all';
    this.http.get(url)
      .subscribe(
        (req: any)=>{
          this.allcities = req;
        }
      );
  }

  // signup swinger with active city
  activecityswingersignup(form:NgForm){
    const url = null;
    const payload = {
      country: form.value.countryswinger,
      state: form.value.stateswinger,
      city: form.value.cityswinger,
      active: true,
      swingtype: form.value.swingerpreference,
      email: form.value.swingeremail
    };

  }


  // for scrolling to swinger and host sell sections

  scrolltosection(id){
    const el = document.getElementById(id);
    el.scrollIntoView({behavior: "smooth"});

  }



  ngOnInit() {
    // get all active countries;
    const url = countriesbystatus + 'active';
    this.http.get(url)
      .subscribe(
        (req: any)=>{
          this.activecountries = req;
        });
    // get all swinger types
    const swingerurl = swingtypeallorcreate;
    this.http.get(swingerurl)
      .subscribe(
        (req: any)=>{
          this.swingertypes = req;
        });

    // get all countries;
    const countryurl = countriesbystatus + 'all';
    this.http.get(countryurl)
      .subscribe(
        (req:any)=>{
          this.allcountries = req;
        });

    // get all host types
    const hosturl = hosttypeallorcreate;
    this.http.get(hosturl)
      .subscribe(
        (req: any)=>{
          this.hosttypes = req;
        }
      );
  }

}
