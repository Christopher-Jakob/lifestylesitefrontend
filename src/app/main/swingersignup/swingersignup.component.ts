import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Httpservice} from '../../services/httpservice/httpservice';
import {countriesbystatus} from '../../urls/siteadminurls/settingsurls/countryurls/countryurls';
import {swingtypeallorcreate} from '../../urls/siteadminurls/settingsurls/swingtypeurls/swingtypeurls';
import {ethnictypescreategetall} from '../../urls/siteadminurls/settingsurls/swingerethnicgroupsurls';
import {
  citytypeotherparamsafter,
  stateandcitybystatus,
  statetypeotherparamsafter
} from '../../urls/siteadminurls/settingsurls/stateandcityurls/stateandcityurls';
import {s3presignedurl} from '../../urls/awsurls/awsurls';

@Component({
  selector: 'app-swingersignup',
  templateUrl: './swingersignup.component.html',
  styleUrls: ['./swingersignup.component.css'],
  providers: [Httpservice]
})
export class SwingersignupComponent implements OnInit {

  constructor(private http: Httpservice) { }
  // boolean for couple signup or not
  couplesignup = false;
  // boolean to show verification upload form
  verificationuploadshow = false;

  // boolean to show location expand request
  locationexpandshow = false;

  //selected couple type for couple signups
  selectedcoupletype = null;


  togglelocationexpandshow(){
    this.locationexpandshow = !this.locationexpandshow
  }

  toggleverificationshow(){
    this.verificationuploadshow = !this.verificationuploadshow;
  }
  coupleselected(){
    const selected = this.signupform.value.swingtype;
    for(let type of this.swingoptions){
      if(type.id == selected) {
        if (type.couple) {
          this.couplesignup = true;
          this.selectedcoupletype = type;
          return;

        }
        this.couplesignup = false;

      }

    }

  }

  @ViewChild('signupform') signupform: NgForm;

  activecountries = [];
  allcountries = [];
  activestates = [];
  allstates = [];
  activecity = [];
  allcities = [];
  swingoptions = [];
  ethnicgroups = [];

  getstatesbycountry(status){
    let url = null;
    if(status === 'active'){
      console.log(this.signupform);
      const id = this.signupform.value.country;
      console.log('this is the form value');
      console.log(this.signupform.value.country);
      url = stateandcitybystatus + statetypeotherparamsafter + String(id) + '/active';
      this.http.get(url)
        .subscribe(
          (req:any)=>{
            this.activestates = req.body;
          }
        );

    }
    if(status === 'all'){
      const id = this.signupform.value.expandtoareacountry;
      url = stateandcitybystatus + statetypeotherparamsafter + String(id) + '/all';
      this.http.get(url)
        .subscribe(
          (req:any)=>{
            this.allstates = req.body;
          }
        );
    }
  }

  getcitiesbystate(status){
    let url = null;
    if(status === 'active'){
      const id = this.signupform.value.state;
      url = stateandcitybystatus + citytypeotherparamsafter + String(id) + '/active';
      this.http.get(url)
        .subscribe(
          (req:any)=>{
            this.activecity = req.body;
          }
        );
    }
    if(status === 'all'){
      const id = this.signupform.value.expandtoareastate;
      url = stateandcitybystatus + citytypeotherparamsafter + String(id) + '/all';
      this.http.get(url)
        .subscribe(
          (req:any)=>{
            this.allcities = req.body;
          }
        );
    }
  }

  uploadverificationphoto(event){
    let submittedimage = event.target.files[0];
    let databasekey = null;
    let uriroot = null;
    const presignedimageurl = s3presignedurl + 'image';
    this.http.get(presignedimageurl)
      .subscribe(
        (req: any)=>{
          const body = req.body;
          databasekey = body.fields.key;
          uriroot = body.uriroot;
          let fd = new FormData();
          fd.append('acl', body.fields.acl);
          fd.append('key', body.fields.key);
          fd.append('content-type', body.fields['content-type']);
          fd.append('Policy', body.fields.policy);
          fd.append('x-amz-algorithm', body.fields['x-amz-algorithm']);
          fd.append('x-amz-credential', body.fields['x-amz-credential']);
          fd.append('x-amz-date', body.fields['x-amz-date']);
          fd.append('x-amz-signature', body.fields['x-amz-signature']);
          fd.append('file', submittedimage);
          this.http.post(body.url, fd)
            .subscribe(
              (req:any)=>{
                
              }
            );




        }
      );
  }

  ngOnInit() {

    const activecountriesurl = countriesbystatus + 'active';
    this.http.get(activecountriesurl)
      .subscribe(
        (req:any)=>{
          this.activecountries = req.body;
        });

    const swingtypeurl = swingtypeallorcreate;
    this.http.get(swingtypeurl)
      .subscribe(
        (req:any)=>{
          this.swingoptions = req.body;
        });
    const ethnictypeurl = ethnictypescreategetall;
    this.http.get(ethnictypeurl)
      .subscribe(
        (req:any)=>{
          this.ethnicgroups = req.body;
          console.log(this.ethnicgroups);
        }
      );
    const allcountriesurl = countriesbystatus + 'all';
    this.http.get(allcountriesurl)
      .subscribe(
        (req:any)=>{
          this.allcountries = req.body;
        }
      );






  }

}
