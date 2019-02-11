import { Component, OnInit } from '@angular/core';
import {Httpservice} from '../../../services/httpservice/httpservice';
import {getpostallswingersignupdeclinereasons} from '../../../urls/siteadminurls/settingsurls/swingerdeclinereasonurls/swingerdeclinereasonsurls';
import {getswingerapplicationlist} from '../../../urls/userurls/swingerurls/swingerurls/swingerurls';
import {TimeAndDateTools} from '../../../tools/timeanddatetools/timeanddatetools';

@Component({
  selector: 'app-swingersignupapproval',
  templateUrl: './swingersignupapproval.component.html',
  styleUrls: ['./swingersignupapproval.component.css'],
  providers:[Httpservice, TimeAndDateTools ]
})
export class SwingersignupapprovalComponent implements OnInit {

  constructor(private http: Httpservice, private datetools:TimeAndDateTools) { }

  // pool of swinger requests coming from the database
  swingerapplicationlistpool = [];

  // display array of swingers to be shown in the admin. Max is 2
  swingerapplicationhold = [];

  // array to hold the decline reasons
  swingerdeclinereasons = [];

  // show unshow decline reason form
  activatedecline = false;

  //toggle show decline reason form
  toggledeclinereason(){
    this.activatedecline = !this.activatedecline;
  }

  // populates the swinger hold from the swinger list max populate is 2
  populateswingerapplicationhold(){
    if(this.swingerapplicationlistpool.length > 0){
      while(this.swingerapplicationhold.length < 2){
        if(this.swingerapplicationlistpool.length > 0){
          this.swingerapplicationlistpool[0].birthday1 = this.datetools.yearssincedate(this.swingerapplicationlistpool[0].birthday1);
          if(this.swingerapplicationlistpool[0].birthday2 != null){
            this.swingerapplicationlistpool[0].birthday2 = this.datetools.yearssincedate(this.swingerapplicationlistpool[0].birthday2);

          }
          this.swingerapplicationhold.push(this.swingerapplicationlistpool[0]);
          this.swingerapplicationlistpool.splice(0,1);
        }
        if(this.swingerapplicationlistpool.length < 1){
          break;
        }
      }
    }
  }

  submitdeclinereason(index, form){
    const pk  = this.swingerapplicationhold[index].user.pk;
    const payload = {
      declinereason: form.value.declinereason,
      
    };


  }

  ngOnInit() {

    this.http.get(getswingerapplicationlist)
      .subscribe(
        (req:any)=>{
          this.swingerapplicationlistpool = req.body;
          console.log(this.swingerapplicationlistpool);
          this.populateswingerapplicationhold();

        }
      );

    this.http.get(getpostallswingersignupdeclinereasons)
      .subscribe(
        (req: any)=>{
          this.swingerdeclinereasons = req.body;
        }
      );

  }

}
