import {Component, OnInit, ViewChild} from '@angular/core';
import {Httpservice} from '../../../services/httpservice/httpservice';
import {NgForm} from '@angular/forms';

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



  // country action code

  // add new country
  addcountry(){
    //todo
  }

  //add new state
  addstate(){
    //todo
  }

  addcity(){
    //todo
  }

  ngOnInit() {
    // get all countries
    this.http.get('no')
      .subscribe((req:any)=>{
      this.countries = req;
    });

  }

}
