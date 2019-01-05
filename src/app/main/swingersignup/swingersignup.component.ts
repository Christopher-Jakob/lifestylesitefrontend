import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Httpservice} from '../../services/httpservice/httpservice';
import {countriesbystatus} from '../../urls/siteadminurls/settingsurls/countryurls/countryurls';
import {swingtypeallorcreate} from '../../urls/siteadminurls/settingsurls/swingtypeurls/swingtypeurls';
import {ethnictypescreategetall} from '../../urls/siteadminurls/settingsurls/swingerethnicgroupsurls';
import {
  citytypeotherparamsafter,
  stateandcitybystatus,
  statetypeotherparamsafter
} from '../../urls/siteadminurls/settingsurls/stateandcityurls/stateandcityurls';

@Component({
  selector: 'app-swingersignup',
  templateUrl: './swingersignup.component.html',
  styleUrls: ['./swingersignup.component.css'],
  providers: [Httpservice]
})
export class SwingersignupComponent implements OnInit {

  constructor(private http: Httpservice) { }
  // boolean for couple signup or not
  couplesignup = false;
  // boolean to show verification upload form
  verificationuploadshow = false;

  // boolean to show location expand request
  locationexpandshow = false;


  togglelocationexpandshow(){
    this.locationexpandshow = !this.locationexpandshow
  }

  toggleverificationshow(){
    this.verificationuploadshow = !this.verificationuploadshow;
  }
  coupleselected(){
    //todo

  }

  @ViewChild('signupform') signupform: NgForm;

  activecountries = [];
  allcountries = [];
  activestates = [];
  allstates = [];
  activecity = [];
  allcities = [];
  swingoptions = [];
  ethnicgroups = [];

  getstatesbycountry(form:NgForm, status){
    let url = null;
    if(status === 'active'){
      const id = form.value.country;
      url = stateandcitybystatus + statetypeotherparamsafter + String(id) + '/active';
      this.http.get(url)
        .subscribe(
          (req:any)=>{
            this.activestates = req.body;
          }
        );

    }
    if(status === 'all'){
      const id = form.value.expandtoareastate;
      url = stateandcitybystatus + statetypeotherparamsafter + String(id) + '/all';
      this.http.get(url)
        .subscribe(
          (req:any)=>{
            this.allstates = req.body;
          }
        );
    }
  }

  getcitiesbystate(form:NgForm, status){
    let url = null;
    if(status === 'active'){
      const id = form.value.state;
      url = stateandcitybystatus + citytypeotherparamsafter + String(id) + '/active';
      this.http.get(url)
        .subscribe(
          (req:any)=>{
            this.activecity = req.body;
          }
        );
    }
    if(status === 'all'){
      const id = form.value.expandtoareacity;
      url = stateandcitybystatus + citytypeotherparamsafter + String(id) + '/all';
      this.http.get(url)
        .subscribe(
          (req:any)=>{
            this.allcities = req.body;
          }
        );
    }
  }

  ngOnInit() {

    const activecountriesurl = countriesbystatus + 'active';
    this.http.get(activecountriesurl)
      .subscribe(
        (req:any)=>{
          this.activecountries = req.body;
        });

    const swingtypeurl = swingtypeallorcreate;
    this.http.get(swingtypeurl)
      .subscribe(
        (req:any)=>{
          this.swingoptions = req.body;
        });
    const ethnictypeurl = ethnictypescreategetall;
    this.http.get(ethnictypeurl)
      .subscribe(
        (req:any)=>{
          this.ethnicgroups = req.body;
        }
      );
    const allcountriesurl = countriesbystatus + 'all';
    this.http.get(allcountriesurl)
      .subscribe(
        (req:any)=>{
          this.allcountries = req.body;
        }
      );






  }

}
