import { Component, OnInit } from '@angular/core';
import {Httpservice} from '../../../services/httpservice/httpservice';
import {NgForm} from '@angular/forms';
import {bodytypedetail, postgetallbodytypes} from '../../../urls/siteadminurls/settingsurls/swingerbodytypeurls/swingerbodytypeurls';

@Component({
  selector: 'app-swingerbodytypes',
  templateUrl: './swingerbodytypes.component.html',
  styleUrls: ['./swingerbodytypes.component.css']
})
export class SwingerbodytypesComponent implements OnInit {

  constructor(private http: Httpservice) { }

  bodytypes = [];

  addbodytype(form:NgForm){
    const url = postgetallbodytypes;
    const payload = {
      name: form.value.addbodytype
    };
    this.http.post(postgetallbodytypes, payload)
      .subscribe(
        (req: any)=>{
          this.bodytypes.push(req.body);
          form.reset();
        }
      );
  }

  deletebodytype(index){
    const bodytypepk = this.bodytypes[index].pk;
    const url = bodytypedetail + String(bodytypepk);
    this.http.delete(url)
      .subscribe(
        (req: any)=>{
          this.bodytypes.splice(+index, 1);
        }
      );
  }

  ngOnInit() {
    this.http.get(postgetallbodytypes)
      .subscribe(
        (req: any)=>{
          this.bodytypes = req.body;
        }
      );
  }

}
