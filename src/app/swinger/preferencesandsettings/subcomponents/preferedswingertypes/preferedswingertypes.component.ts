import { Component, OnInit } from '@angular/core';
import {Httpservice} from '../../../../services/httpservice/httpservice';
import {swingtypeallorcreate} from '../../../../urls/siteadminurls/settingsurls/swingtypeurls/swingtypeurls';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-preferedswingertypes',
  templateUrl: './preferedswingertypes.component.html',
  styleUrls: ['./preferedswingertypes.component.css'],
  providers:[Httpservice]
})
export class PreferedswingertypesComponent implements OnInit {

  constructor(private http: Httpservice) { }
  swingtypes = [];

  updatepreferedswingtypes(form: NgForm){
    //todo
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
