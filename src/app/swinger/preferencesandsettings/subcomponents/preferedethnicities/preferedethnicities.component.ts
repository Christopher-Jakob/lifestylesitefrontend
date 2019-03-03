import {Component, OnDestroy, OnInit} from '@angular/core';
import {Httpservice} from '../../../../services/httpservice/httpservice';
import {Userservice} from '../../../../services/userservice/userservice';
import {NgForm} from '@angular/forms';
import {modifyswinger} from '../../../../urls/userurls/swingerurls/swingerurls/swingerurls';

@Component({
  selector: 'app-preferedethnicities',
  templateUrl: './preferedethnicities.component.html',
  styleUrls: ['./preferedethnicities.component.css']
})
export class PreferedethnicitiesComponent implements OnInit, OnDestroy {

  constructor(private http: Httpservice, private userservice: Userservice) { }

  usersubject;
  user;

  updatepreferedethnicities(form: NgForm){
    const pk = this.user.swinger_set[0].pk;
    const url = modifyswinger + String(pk);
    const payload = {
      wanthispanic: form.value.hispanic,
      wantlatino: form.value.latino,
      wantwhite: form.value.white,
      wantblack: form.value.black,
      wantasian: form.value.asian,
      wantnativeamerican: form.value.nativeamerican,
      wantpacificislander: form.value.pacificislander
    };
    this.http.put(url, payload)
      .subscribe(
        (req: any)=>{
          this.user.swinger_set[0] = req.body;
          this.userservice.sendmodifiedlifestyleuserobject(this.user);
        }
      );

  }

  ngOnInit() {
    this.usersubject = this.userservice.recieivelifestyleuserobject()
      .subscribe(
        (req: any)=>{
          if(req != null){
            this.user = req;
          }
        }
      );
  }

  ngOnDestroy(){
    this.usersubject.unsubscribe();
  }



}
