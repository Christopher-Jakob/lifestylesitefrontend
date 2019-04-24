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
import {createswingerurl} from '../../urls/userurls/userurl/userurl';
import {getdeleteverificationphotocodeurl, postnewverificationphotocodeurl} from '../../urls/verificationphotourls/codeurls/codeurls';
import {postgetallsexualorientation} from '../../urls/siteadminurls/settingsurls/sexualorientationurls/sexualorientationurl';


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

  //signup verification photo code object holder
  verificatonphotopobject = null;

  //boolean if emails match or not
  emailmismatch  = false;

  //boolean if passwords match or not
  passwordsmismatch = false;

  //show sign up sucess content
  showsignupsucess = false;

  //image holder
  verificationimage;


  //sets photo from browser upload event
  setphoto(event){
    this.verificationimage = event.target.files[0];

  }



  togglelocationexpandshow(){
    this.locationexpandshow = !this.locationexpandshow;
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
  sexualorientations = [];

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

  // info.us@swiss.com

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


  // show unshow ui based on events code

  // emails match

  emailsmatch(){
    if(this.signupform.value.email !== this.signupform.value.emailconfrim){
      this.emailmismatch = true;
      return;

    }
    this.emailmismatch = false;
  }

  // passwords match

  passwordsmatch(){
    if(this.signupform.value.password1 !== this.signupform.value.password2){
      this.passwordsmismatch = true;
      return;
    }
    this.passwordsmismatch = false;

  }

  //sign up swing user

  signup(form:NgForm , event){

    let payload = {
      country: null,
      state: null,
      city: null,
      expandtoareaemail: null,
      expandtoareacountry: null,
      expandtoareastate: null,
      expandtoareacity: null,
      username: null,
      email: null,
      approved: false,
      is_active: false,
      password: null,
      hosttype: null,
      swingertype: null,
      birthdayone: null,
      birthdaytwo: null,
      istranny: false,
      isstraightman: false,
      isbisexualman: false,
      ishetroflexibleman: false,
      isgayman: false,
      isstraightwoman: false,
      isbisexualwoman: false,
      ishetroflexiblewoman: false,
      islesbianwoman: false,
      ethnicity1: null,
      ethnicity2: null,
      orientation1: null,
      orientation2: null,
      verificationphoto: null,
      verificationphotokey: null,
      verificationphotocode: null,
      prelaunchsignup: false

    };
    if(form.value.country != null){
      payload.country = form.value.country;
      payload.state = form.value.state;
      payload.city = form.value.city;
      payload.username = form.value.username;
      payload.email = form.value.email;
      payload.password = form.value.password1;
      payload.swingertype = form.value.swingtype;
      payload.birthdayone = form.value.birthdayone;
      if(form.value.birthdaytwo != null){
        payload.birthdaytwo = form.value.birthdaytwo;
      }
      payload.ethnicity1 = form.value.ethnicity1;
      if(form.value.ethnicity2 != null){
        payload.ethnicity2 = form.value.ethnicity2;
      }
      const straight = 'Straight';
      const bisexual = 'Bisexual';
      const gay = 'Gay';
      const lesbian = 'Lesbian';
      const heteroflexible = 'Heteroflexible';


      payload.orientation1 = form.value.sexualorientation1;
      for(let t of this.swingoptions){
        if(payload.swingertype == t.id){
          if(t.sex1.name === 'Female'){
            for(let o of this.sexualorientations){
              if(payload.orientation1 == o.id){
                if(o.name === straight){
                  payload.isstraightwoman = true;
                }
                if(o.name === bisexual){
                  payload.isbisexualwoman = true;
                }
                if(o.name === gay){
                  payload.islesbianwoman = true;

                }
                if(o.name === lesbian){
                  payload.islesbianwoman = true;
                }
                if(o.name === heteroflexible){
                  payload.ishetroflexiblewoman = true;
                }
              }
            }
          }
          if(t.sex1.name === 'Male'){
            for(let o of this.sexualorientations){
              if(payload.orientation1 == o.id){
                if(o.name === straight){
                  payload.isstraightman = true;
                }
                if(o.name === bisexual){
                  payload.isbisexualman = true;
                }
                if(o.name === gay){
                  payload.isgayman = true;

                }
                if(o.name === lesbian){
                  payload.isgayman = true;
                }
                if(o.name === heteroflexible){
                  payload.ishetroflexibleman = true;
                }
              }
            }
          }
        }
      }

      if(form.value.sexualorientation2 != null){
        payload.orientation2 = form.value.sexualorientation2;
        for(let t of this.swingoptions){
          if(payload.swingertype == t.id){
            if(t.sex2.name === 'Female'){
              for(let o of this.sexualorientations){
                if(payload.orientation2 == o.id){
                  if(o.name === straight){
                    payload.isstraightwoman = true;
                  }
                  if(o.name === bisexual){
                    payload.isbisexualwoman = true;
                  }
                  if(o.name === gay){
                    payload.islesbianwoman = true;

                  }
                  if(o.name === lesbian){
                    payload.islesbianwoman = true;
                  }
                  if(o.name === heteroflexible){
                    payload.ishetroflexiblewoman = true;
                  }
                }
              }
            }
            if(t.sex2.name === 'Male'){
              for(let o of this.sexualorientations){
                if(payload.orientation2 == o.id){
                  if(o.name === straight){
                    payload.isstraightman = true;
                  }
                  if(o.name === bisexual){
                    payload.isbisexualman = true;
                  }
                  if(o.name === gay){
                    payload.isgayman = true;

                  }
                  if(o.name === lesbian){
                    payload.isgayman = true;
                  }
                  if(o.name === heteroflexible){
                    payload.ishetroflexibleman = true;
                  }
                }
              }
            }
          }
        }

      }
      payload.verificationphotocode = this.verificatonphotopobject.code;
    }
    if(form.value.expandtoareaemail != null){
      payload.expandtoareaemail = form.value.expandtoareaemail;
      payload.expandtoareacountry = form.value.expandtoareacountry;
      payload.expandtoareastate = form.value.expandtoareastate;
      payload.expandtoareacity = form.value.expandtoareacity;

    }

    const photo = this.verificationimage;
    let databasekey = null;
    let uriroot = null;
    const presignedimageurl = s3presignedurl + 'image';
    this.http.get(presignedimageurl)
      .subscribe(
        (req: any)=> {
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
          fd.append('file', photo);
          this.http.post(body.url, fd)
            .subscribe(
              (req: any) => {
                const url = getdeleteverificationphotocodeurl + String(this.verificatonphotopobject.id) + '/' + String(this.verificatonphotopobject.code);
                this.http.get(url)
                  .subscribe(
                    (req: any)=>{
                      payload.verificationphoto = uriroot + databasekey;
                      payload.verificationphotokey = databasekey;
                      this.http.post(createswingerurl, payload)
                        .subscribe(
                          (req: any)=>{
                            this.showsignupsucess = true;
                          });

                    });

              });
        });

  }




  ngOnInit() {
    window.scrollTo(0,0);
    const activecountriesurl = countriesbystatus + 'active';
    this.http.get(activecountriesurl)
      .subscribe(
        (req:any)=>{
          this.activecountries = req.body;
          console.log(this.activecountries);
        });

    const swingtypeurl = swingtypeallorcreate;
    this.http.get(swingtypeurl)
      .subscribe(
        (req:any)=>{
          this.swingoptions = req.body;
          console.log('this is the swingtypes');
          console.log(this.swingoptions);
        });
    const ethnictypeurl = ethnictypescreategetall;
    this.http.get(ethnictypeurl)
      .subscribe(
        (req:any)=>{
          this.ethnicgroups = req.body;
          console.log(this.ethnicgroups);
        }
      );
    const sexualorientationurl = postgetallsexualorientation;
    this.http.get(sexualorientationurl)
      .subscribe(
        (req: any)=>{
          this.sexualorientations = req.body;
        }
      );
    const allcountriesurl = countriesbystatus + 'all';
    this.http.get(allcountriesurl)
      .subscribe(
        (req:any)=>{
          this.allcountries = req.body;
        }
      );
    this.http.post(postnewverificationphotocodeurl, null)
      .subscribe(
        (req: any)=>{
          this.verificatonphotopobject = req.body;
          console.log(this.verificatonphotopobject);

        }
      );






  }

}
