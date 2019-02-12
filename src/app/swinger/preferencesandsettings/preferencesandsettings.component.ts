import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferencesandsettings',
  templateUrl: './preferencesandsettings.component.html',
  styleUrls: ['./preferencesandsettings.component.css']
})
export class PreferencesandsettingsComponent implements OnInit {

  constructor() { }
  // boolean to see if this is a couple or not
  couplesignup = false;
  // boolean if a user opts into body types
  bodytypeoptin = false;
  // boolean to allow the settings of body type prefs after verification photo sent
  verificationphotosent = false;
  // boolean to say wether the user has been verified or not
  verified = false;

  bodytypeoptintoggle(){
    this.bodytypeoptin = !this.bodytypeoptin;
  }

  verificationphotosenttoggle(){
    this.verificationphotosent = !this.verificationphotosent;
  }

  swingoptions = [
    {
      name: 'Single Male',
      value: 'sm'
    },
    {
      name: 'Single Woman',
      value: 'sf'
    },
    {
      name: 'Single TS',
      value: 'st'
    },
    {
      name: 'Couple Man & Woman',
      value: 'cmw'
    },
    {
      name: 'Couple Man & Man',
      value: 'cmm'
    },
    {
      name: 'Couple Man & TS',
      value: 'cmt'
    },
    {
      name: 'Couple Woman & Woman',
      value: 'cww'
    },
    {
      name: 'Couple Woman & TS',
      value: 'cwt'
    },
    {
      name: 'Couple TS & TS',
      value: 'ctt'
    }
  ];

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

  bodytypes = [
    {
      name: 'Body Builder',
      value: 'bb'
    },
    {
      name: 'Athletic',
      value: 'ath'
    },
    {
      name: 'Average',
      value: 'ave'
    },
    {
      name: 'Plump',
      value: 'h'
    },
    {
      name: 'Large',
      value: 'l'
    }
  ];



  ngOnInit() {
  }

}
