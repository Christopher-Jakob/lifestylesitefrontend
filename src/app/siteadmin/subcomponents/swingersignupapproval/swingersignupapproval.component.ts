import { Component, OnInit } from '@angular/core';
import {Httpservice} from '../../../services/httpservice/httpservice';
import {getpostallswingersignupdeclinereasons} from '../../../urls/siteadminurls/settingsurls/swingerdeclinereasonurls/swingerdeclinereasonsurls';
import {getswingerapplicationlist} from '../../../urls/userurls/swingerurls/swingerurls/swingerurls';
import {TimeAndDateTools} from '../../../tools/timeanddatetools/timeanddatetools';
import {swingerdeclineaccept} from '../../../urls/userurls/userurl/userurl';

@Component({
  selector: 'app-swingersignupapproval',
  templateUrl: './swingersignupapproval.component.html',
  styleUrls: ['./swingersignupapproval.component.css'],
  providers:[Httpservice, TimeAndDateTools ]
})
export class SwingersignupapprovalComponent implements OnInit {

  constructor(private http: Httpservice, private datetools: TimeAndDateTools) { }

  // pool of swinger requests coming from the database
  swingerapplicationlistpool = [];

  // display array of swingers to be shown in the admin. Max is 2
  swingerapplicationhold = [];

  // array to hold the decline reasons
  swingerdeclinereasons = [];

  // show unshow decline reason form
  activatedecline = false;

  // selects the swinger request on which to show the decline form
  selectedindex;

  //toggle show decline reason form
  toggledeclinereason(index){
    this.activatedecline = !this.activatedecline;
    this.selectedindex = index;
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

  approvaldecision(index, form, decline){
    const pk  = this.swingerapplicationhold[index].user.id;
    let payload = null;
    if(decline){
      payload = {
        declinereason: form.value.declinereason,
        decline: true,
        pk: pk
      };
    }
    if(!decline) {
      payload = {
        declinereason: null,
        decline: false,
        pk: pk
      };
    }
      this.http.put(swingerdeclineaccept, payload)
        .subscribe(
          (req: any)=>{
            this.swingerapplicationhold.splice(index, 1);
            this.populateswingerapplicationhold();

          });

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
