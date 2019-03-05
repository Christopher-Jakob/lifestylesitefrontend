import { Component, OnInit } from '@angular/core';
import {Httpservice} from '../../../services/httpservice/httpservice';
import {getswingerbodytypeapplications} from '../../../urls/userurls/swingerurls/swingerurls/swingerurls';

@Component({
  selector: 'app-swingerbodytypeapproval',
  templateUrl: './swingerbodytypeapproval.component.html',
  styleUrls: ['./swingerbodytypeapproval.component.css']
})
export class SwingerbodytypeapprovalComponent implements OnInit {

  constructor(private http: Httpservice) { }

  showacceptform= false;
  showdeclineform = false;

  toggleshowacceptform(){
    this.showacceptform = !this.showacceptform;
  }

  toggleshowdeclineform(){
    this.showdeclineform = !this.showdeclineform;
  }

  bodytypeapplications = [];

  activeapplications = [];

  populateactiveapplications(){
    if(this.bodytypeapplications.length > 0){
      if(this.activeapplications.length < 2){
        while(this.activeapplications.length < 2 && this.bodytypeapplications.length > 0){
          this.activeapplications.push(this.bodytypeapplications[0]);
          this.bodytypeapplications.splice(0,1);
        }
      }
    }
  }

  ngOnInit() {
    this.http.get(getswingerbodytypeapplications)
      .subscribe(
        (req: any)=>{
          this.bodytypeapplications = req.body;
          this.populateactiveapplications();
        }
      );
  }

}
