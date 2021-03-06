import {Component, OnDestroy, OnInit} from '@angular/core';
import {Httpservice} from '../../services/httpservice/httpservice';
import {countriesbystatus} from '../../urls/siteadminurls/settingsurls/countryurls/countryurls';
import {NgForm} from '@angular/forms';
import {stateandcitybystatus} from '../../urls/siteadminurls/settingsurls/stateandcityurls/stateandcityurls';
import {swingtypeallorcreate} from '../../urls/siteadminurls/settingsurls/swingtypeurls/swingtypeurls';
import {hosttypeallorcreate} from '../../urls/siteadminurls/settingsurls/hosttypeurls/hosttypeurls';
import {userurl} from '../../urls/userurls/userurl/userurl';
import {Router} from '@angular/router';
import {ShowHideService} from '../../services/controlservices/showhideservice/showhideservice';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
  providers: [Httpservice]
})
export class LandingpageComponent implements OnInit, OnDestroy {


  constructor(private http: Httpservice, private router: Router, private showhideservice: ShowHideService) { }
  // swinger sign up show request city boolean
  swingercityrequestshow = false;

  // swinger city request sucesss show
  swingercityrequestsucess = false;

  // host city request sucess show
  hostcityrequestsucess = false;

  // failure text show
  failuretext = null;
  showfailtext = false;

  //swinger sign up success
  swingersignupsucess = false;

  //host sign up success
  hostsignupsucess = false;

  toggleswingercityrequest(){
    this.swingercityrequestshow = !this.swingercityrequestshow;
  }

  //show login form
  showloginform = false;

  toggleshowloginform(){
    this.showloginform = !this.showloginform;
  }

  // landing page login subscription holder var
  showhidelandingpagesubject;

  // landing page login send show hide command
  sendshowhidecommand(){
    this.showhideservice.sendchangelandingpageloginshowhide();
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
    if(form.value.countryswinger != null) {
      country = form.value.countryswinger;
    }
    if(form.value.countryhost != null){
      country = form.value.countryhost;
    }
    const url = stateandcitybystatus + 'state/' + String(country) + '/' + 'active';
    this.http.get(url)
      .subscribe(
        (req: any)=>{
          this.activestates = req.body;
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
          this.allstates = req.body;
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
          this.activecities = req.body;
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
          this.allcities = req.body;
        }
      );
  }





  // for scrolling to swinger and host sell sections

  scrolltosection(id){
    const el = document.getElementById(id);
    el.scrollIntoView({behavior: "smooth"});

  }


  navtoswingersignup(){
    this.router.navigate(['swingersignup']);
  }

  swingercityrequest(form:NgForm){
    const url = userurl;
    const payload = {
      country: form.value.countryswingerrequest,
      state: form.value.stateswingerrequest,
      city: form.value.cityswingerrequest,
      swingerpreference: form.value.swingerpreferencerequest,
      email: form.value.swingeremailrequest,
      active: false,
      hosttype: null,
      hostsignup: false,
      swingersignup: true,
      prelaunchsignup: true
    };
    this.http.post(url, payload)
      .subscribe(
        (req: any)=>{
          this.swingercityrequestsucess = true;
        },
        (err: any)=>{
          this.showfailtext = true;
          this.failuretext = err.error.failuretext;
          setTimeout(()=>{
            this.showfailtext = false;
          }, 3000);
        }
      );
  }


  hostcityrequest(form:NgForm){
    const url = userurl;
    const payload = {
      country: form.value.countryhostrequest,
      state: form.value.statehostrequest,
      city: form.value.cityhostrequest,
      swingerpreference: null,
      email: form.value.hostemailrequest,
      active: false,
      hosttype: form.value.hosttyperequest,
      hostsignup: true,
      swingersignup: false,
      prelaunchsignup: true
    };
    this.http.post(url, payload)
      .subscribe(
        (req: any)=>{
          this.hostcityrequestsucess = true;
        },
        (err: any)=>{
          this.showfailtext = true;
          this.failuretext = err.error.failuretext;
          setTimeout(()=>{
            this.showfailtext = false;
          }, 3000);
        }
      );
  }



  ngOnInit() {

    // subscribe to the landing page login show hide service
    this.showhidelandingpagesubject = this.showhideservice.receivechangelandingpageloginshowhide()
      .subscribe(
        (req: any)=>{
          if(req != null){
            this.toggleshowloginform();
          }
        }
      );
    // get all active countries;
    const url = countriesbystatus + 'active';
    this.http.get(url)
      .subscribe(
        (req: any)=>{
          console.log(req);
          this.activecountries = req.body;
        });
    // get all swinger types
    const swingerurl = swingtypeallorcreate;
    this.http.get(swingerurl)
      .subscribe(
        (req: any)=>{
          this.swingertypes = req.body;
        });

    // get all countries;
    const countryurl = countriesbystatus + 'all';
    this.http.get(countryurl)
      .subscribe(
        (req:any)=>{
          this.allcountries = req.body;
        });

    // get all host types
    const hosturl = hosttypeallorcreate;
    this.http.get(hosturl)
      .subscribe(
        (req: any)=>{
          this.hosttypes = req.body;
        }
      );
  }

  ngOnDestroy(){
    this.showhidelandingpagesubject.unsubscribe();
  }

}
