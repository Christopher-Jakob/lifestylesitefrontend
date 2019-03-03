import {Component, OnDestroy, OnInit} from '@angular/core';
import {Httpservice} from '../../../../services/httpservice/httpservice';
import {swingtypeallorcreate} from '../../../../urls/siteadminurls/settingsurls/swingtypeurls/swingtypeurls';
import {NgForm} from '@angular/forms';
import {modifyswinger} from '../../../../urls/userurls/swingerurls/swingerurls/swingerurls';
import {Userservice} from '../../../../services/userservice/userservice';

@Component({
  selector: 'app-preferedswingertypes',
  templateUrl: './preferedswingertypes.component.html',
  styleUrls: ['./preferedswingertypes.component.css'],
  providers:[Httpservice]
})
export class PreferedswingertypesComponent implements OnInit, OnDestroy {

  constructor(private http: Httpservice, private userservice: Userservice) { }
  swingersubscription;
  swinger;

  updatepreferedswingtypes(form: NgForm){
    const pk = this.swinger.swinger_set[0].pk;
    const url = modifyswinger + pk;
    const payload = {
      wantsinglewoman: form.value.singlewoman,
      wantsingleman: form.value.singleman,
      wantsinglets: form.value.singlets,
      wantcouplemanwoman: form.value.couplemanwoman,
      wantcouplewomanwoman: form.value.couplewomanwoman,
      wantcouplewomants: form.value.couplewomants,
      wantcouplemanman: form.value.couplemanman,
      wantcouplemants: form.value.couplemants,
      wantcoupletsts: form.value.coupletsts

    };
    this.http.put(url, payload)
      .subscribe(
        (req: any)=>{
          console.log(req);
          this.swinger.swinger_set[0] = req.body;
          this.userservice.sendmodifiedlifestyleuserobject(this.swinger);
        }
      );


  }



  ngOnInit() {
   this.swingersubscription = this.userservice.recieivelifestyleuserobject()
      .subscribe(
        (req:any)=>{
          if(req != null){
            this.swinger = req;
            console.log('this is the swinger');
            console.log(this.swinger);
          }
        }
      );
  }

  ngOnDestroy(){
    this.swingersubscription.unsubscribe();

  }

}
