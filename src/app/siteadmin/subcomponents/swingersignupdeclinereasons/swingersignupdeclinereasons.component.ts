import { Component, OnInit } from '@angular/core';
import {Httpservice} from '../../../services/httpservice/httpservice';
import {
  deleteswingersignupdeclinereason,
  getpostallswingersignupdeclinereasons
} from '../../../urls/siteadminurls/settingsurls/swingerdeclinereasonurls/swingerdeclinereasonsurls';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-swingersignupdeclinereasons',
  templateUrl: './swingersignupdeclinereasons.component.html',
  styleUrls: ['./swingersignupdeclinereasons.component.css']
})
export class SwingersignupdeclinereasonsComponent implements OnInit {

  constructor(private http: Httpservice) { }

  // array that holds decline reasons
  declinereasons = [];

  // add decline reason
  adddeclinereason(form:NgForm){
    const payload = {
      name: form.value.declinereasonadd
    };
    this.http.post(getpostallswingersignupdeclinereasons, payload)
      .subscribe(
        (req: any)=>{
          this.declinereasons.push(req.body);
          form.reset();
        }
      );

  }



  // decline reason delete function
  deletereason(index){
    const pk = this.declinereasons[index].pk;
    const url = deleteswingersignupdeclinereason + String(pk);
    this.http.delete(url)
      .subscribe(
        (req: any)=>{
          this.declinereasons.splice(+index, 1);
        }
      );
  }

  ngOnInit() {
    this.http.get(getpostallswingersignupdeclinereasons)
      .subscribe(
        (req: any)=>{
          this.declinereasons = req.body;
        }
      );
  }

}
