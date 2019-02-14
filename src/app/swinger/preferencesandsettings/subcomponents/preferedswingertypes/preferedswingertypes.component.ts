import { Component, OnInit } from '@angular/core';
import {Httpservice} from '../../../../services/httpservice/httpservice';
import {swingtypeallorcreate} from '../../../../urls/siteadminurls/settingsurls/swingtypeurls/swingtypeurls';
import {NgForm} from '@angular/forms';
import {modifyswinger} from '../../../../urls/userurls/swingerurls/swingerurls/swingerurls';

@Component({
  selector: 'app-preferedswingertypes',
  templateUrl: './preferedswingertypes.component.html',
  styleUrls: ['./preferedswingertypes.component.css'],
  providers:[Httpservice]
})
export class PreferedswingertypesComponent implements OnInit {

  constructor(private http: Httpservice) { }
  swingtypes = [];
  swinger;

  updatepreferedswingtypes(form: NgForm){
    const url = modifyswinger + 'pkgoeshere';


    const payload = {
      wantsinglewoman: form.value.singlewoman,
      wantsingleman: form.value.singleman,
      wantssinglets: form.value.singlets,
      wantcouplemanwoman: form.value.couplemanwoman,
      wantcouplewomanwoman: form.value.couplewomanwoman,
      wantcouplewomants: form.value.couplewomants,
      wantcouplemanman: form.value.couplemanman,
      wantcouplemants: form.value.couplemants,
      wantcoupletsts: form.value.coupletsts

    };
    this.http.put(url, payload)
      .subscribe(
        (req: any)=>{
          this.swinger = req.body;
        }
      );


  }



  ngOnInit() {
    this.http.get(swingtypeallorcreate)
      .subscribe(
        (req:any)=>{
          this.swingtypes = req.body;
        }
      );
  }

}
