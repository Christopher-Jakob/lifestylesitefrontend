import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-swingersignup',
  templateUrl: './swingersignup.component.html',
  styleUrls: ['./swingersignup.component.css']
})
export class SwingersignupComponent implements OnInit {

  constructor() { }
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
    let swingvalue = this.signupform.form.value.swingtype;
    for( let value of this.coupleoptions){
      if(swingvalue === value){
        this.couplesignup = true;
        return 0;
      }
    }
    this.couplesignup = false;

  }

  @ViewChild('signupform') signupform: NgForm;

  countries = [];

  states = [];

  city = [];

  swingoptions = [];
  coupleoptions = [];

  ethnicgroups = [
    {
      label: 'Hispanic',
      value: 'h'
    },
    {
      label: 'latino',
      value: 'l'
    },
    {
      label: 'White',
      value: 'w'
    },
    {
      label: 'Black',
      value: 'b'
    },
    {
      label: 'Asian',
      value: 'a'
    },
    {
      label: 'Native American',
      value: 'na'
    },
    {
      label: 'Pacific Islander',
      value: 'pi'
    }
  ];

  ngOnInit() {
  }

}
