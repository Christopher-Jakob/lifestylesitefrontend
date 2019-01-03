import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {sextypeallorcreate, sextypedetail} from '../../../urls/siteadminurls/settingsurls/sextypeurls/sextypeurls';
import {Httpservice} from '../../../services/httpservice/httpservice';
import {ethnictypedetail, ethnictypescreategetall} from '../../../urls/siteadminurls/settingsurls/swingerethnicgroupsurls';

@Component({
  selector: 'app-sextypeandethnictypes',
  templateUrl: './sextypeandethnictypes.component.html',
  styleUrls: ['./sextypeandethnictypes.component.css'],
  providers: [Httpservice]
})
export class SextypeandethnictypesComponent implements OnInit {

  constructor(private http: Httpservice) { }

  sextypes = [];
  ethnictypes = [];

  addsextype(form:NgForm){
    const url = sextypeallorcreate;
    const payload = {
      name: form.value.sextypecreate
    };
    this.http.post(url, payload)
      .subscribe(
        (req: any)=>{
          this.sextypes.push(req.body);
          form.reset();
        }
      );
  }

  deletesextype(index){
    const url = sextypedetail + String(this.sextypes[index].id);
    this.http.delete(url)
      .subscribe(
        (req: any)=>{
          this.sextypes.splice(+index,1);
        }
      );

    }

    addethnictype(form:NgForm){
    const url = ethnictypescreategetall;
    const payload = {
      name : form.value.ethnictypecreate
      };
    this.http.post(url, payload)
      .subscribe(
        (req: any)=>{
          this.ethnictypes.push(req.body);
          form.reset();
        }
      );
    }

    deleteethnictype(index){
    const url = ethnictypedetail + String(this.ethnictypes[index].id);
    this.http.delete(url)
      .subscribe(
        (req:any)=>{
          this.ethnictypes.splice(+index,1);
        }
      );
    }

  ngOnInit() {
    //get all sex types
    this.http.get(sextypeallorcreate)
      .subscribe(
        (req:any)=>{
          this.sextypes = req.body;
        });
    //get all ethnic types
    this.http.get(ethnictypescreategetall)
      .subscribe(
        (req:any)=>{
          this.ethnictypes = req.body;
        });

  }

}
