import {Component, OnInit, ViewChild} from '@angular/core';
import {Httpservice} from '../../../services/httpservice/httpservice';
import {NgForm} from '@angular/forms';
import {countriesbystatus, countrydetail, makecountry} from '../../../urls/siteadminurls/settingsurls/countryurls/countryurls';
import {
  citytypeotherparamsafter,
  makestateorcity,
  stateandcitybystatus, stateorcitydetail,
  statetypeotherparamsafter
} from '../../../urls/siteadminurls/settingsurls/stateandcityurls/stateandcityurls';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  providers: [Httpservice]
})
export class LocationsComponent implements OnInit {

  constructor(private http: Httpservice) { }

  countries = [];

  states = [];

  cities = [];

  @ViewChild('addstateform') addstateform : NgForm;
  @ViewChild('addcountryform') addcountryform : NgForm;
  @ViewChild('addcityform') addcityform : NgForm;

  // show submit buttons for indivdual country city state
  countrysubmitshow = false;
  statesubmitshow = false;
  citysubmitshow = false;
  editcountryshow = false;
  editstateshow = false;
  editcityshow = false;





  showlocationsubmitbutton(type){
    if(type === 'c'){
      if(this.addcountryform.form.value.countryadd != ''){
        this.countrysubmitshow = true;
        return 0;
      }
      this.countrysubmitshow = false;
    }
    if(type === 's'){
      if(this.addstateform.form.value.stateadd != ''){
        this.statesubmitshow = true;
        return 0;
      }
      this.statesubmitshow = false;
    }

    if(type === 'x'){
      if(this.addcityform.form.value.cityadd !== ''){
        this.citysubmitshow = true;
        return 0;
      }
      this.citysubmitshow = false;
    }

  }

  changeactivestatus(type, index){
    if(type === 'country'){
      const url = countrydetail + this.countries[index].id;
      const payload = {
        active: !this.countries[index].active
      };
      this.http.put(url, payload)
        .subscribe(
          (req: any)=>{
            this.countries[index] = req;
          }
        );

    }
    if(type === 'state'){
      const url = stateorcitydetail + 'state/' + this.states[index].id;
      const payload = {
        active: !this.states[index].active
      };
      this.http.put(url, payload)
        .subscribe(
          (req: any)=>{
            this.states[index] = req;
          }
        );
    }
    if(type ==='city'){
      const url = stateorcitydetail + 'city/' + this.cities[index].id;
      const payload = {
        active: !this.cities[index].active
      };
      this.http.put(url, payload)
        .subscribe(
          (req: any)=>{
            this.cities[index] = req;
          }
        );
    }
  }

  editname(type, index, form:NgForm){
    let url = null;
    let payload = null;

    if(type === 'country'){
      url = countrydetail + this.countries[index].id;
      payload = {
        name: form.value.editcountry
      };
    }
    if(type === 'state'){
      url = stateorcitydetail + 'state/' + this.states[index].id;
      payload = {
        name: form.value.editstate
      };
    }

    if(type === 'city'){
      url = stateorcitydetail + 'city/' + this.cities[index].id;
      payload = {
        name: form.value.editcity
      };
    }


  }



  // country action code

  // holds currently selected country for state objects load
  activecountryobject = null;

  // gets states by choosen country
  getstatesbycountry(index){
    this.cities = [];
    this.activestateobject = null;
    this.activecountryobject = this.countries[index];
    const url = stateandcitybystatus + 'state/' + String(this.activecountryobject.id) + '/' + 'all';
    this.http.get(url)
      .subscribe((req:any) =>{
        this.states = req;
    });
  }

  // add new country
  addcountry(){
    const url = makecountry;
    const payload = {
      name: this.addcountryform.form.value.countryadd,
      active: false
    };
    this.http.post(url, payload)
      .subscribe((req: any)=>{
        this.countries.push(req);
        this.addcountryform.reset();
        this.countrysubmitshow = false;
      });
  }

  // edit country code

  toggleeditcountry(){
    this.editcountryshow = !this.editcountryshow;
  }

  // state action code

  // holds currently selected state for city objects to load
  activestateobject = null;

  // gets cities by choosen state
  getcitybystate(index){
    this.activestateobject = this.states[index];
    const url = stateandcitybystatus + 'city/' + String(this.activestateobject.id) + '/' + 'all';
    this.http.get(url)
      .subscribe(
        (req:any)=>{
          this.cities = req;
        }
      );


  }

  //add new state

  addstate(){
    const url = makestateorcity + statetypeotherparamsafter + this.activecountryobject.id;
    const payload = {
      country: this.activecountryobject.id,
      name: this.addstateform.form.value.stateadd,
      active: false
    };
    this.http.post(url, payload)
      .subscribe((req:any) =>{
        this.states.push(req);
        this.statesubmitshow = false;
        this.addstateform.reset();
    });
  }

  //edit state

  toggleeditstate(){
    this.editstateshow = !this.editcountryshow;
  }

  // city action code

  // add new city

  addcity(){
    const url = makestateorcity + citytypeotherparamsafter + this.activestateobject.id;
    const payload = {
      state: this.activestateobject.id,
      name: this.addcityform.form.value.cityadd,
      active: false
    };
    this.http.post(url, payload)
      .subscribe(
        (req: any)=>{
          this.cities.push(req);
          this.citysubmitshow = false;
          this.addcityform.reset();
        }
      );
  }

  // edit city

  toggleeditcity(){
    this.editcityshow = !this.editcityshow;
  }

  ngOnInit() {
    // get all countries
    let url = countriesbystatus + 'all';
    this.http.get(url)
      .subscribe((req:any)=>{
      this.countries = req;
    });
  }

}
