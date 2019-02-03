import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Httpservice} from '../../services/httpservice/httpservice';
import {passwordvalidate} from '../../urls/siteadminurls/siteadminrooturl/siteadminrooturl';

@Component({
  selector: 'app-siteadminmain',
  templateUrl: './siteadminmain.component.html',
  styleUrls: ['./siteadminmain.component.css'],
  providers: [Httpservice]
})
export class SiteadminmainComponent implements OnInit {

  constructor(private http: Httpservice) { }
  verified = false;

  passwordsubmit(form:NgForm){
    const payload = {
      password: form.value.password
    };
    this.http.post(passwordvalidate, payload)
      .subscribe(
        (req: any)=>{
          if(req.body.status === 1){
            this.verified = true;

          }
        }
      );
  }
  ngOnInit() {

  }

}
