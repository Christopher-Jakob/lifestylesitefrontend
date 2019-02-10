import { Component, OnInit } from '@angular/core';
import {Httpservice} from '../../../services/httpservice/httpservice';
import {getpostallswingersignupdeclinereasons} from '../../../urls/siteadminurls/settingsurls/swingerdeclinereasonurls/swingerdeclinereasonsurls';

@Component({
  selector: 'app-swingersignupapproval',
  templateUrl: './swingersignupapproval.component.html',
  styleUrls: ['./swingersignupapproval.component.css']
})
export class SwingersignupapprovalComponent implements OnInit {

  constructor(private http: Httpservice) { }

  swingerdeclinereasons = [];

  // show unshow decline reason form
  activatedecline = false;

  //toggle show decline reason form
  toggledeclinereason(){
    this.activatedecline = !this.activatedecline;
  }

  ngOnInit() {
    this.http.get(getpostallswingersignupdeclinereasons)
      .subscribe(
        (req: any)=>{
          this.swingerdeclinereasons = req.body;
        }
      );

  }

}
