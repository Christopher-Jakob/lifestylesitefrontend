import {Component, OnDestroy, OnInit} from '@angular/core';
import {Httpservice} from '../../../../services/httpservice/httpservice';
import {Userservice} from '../../../../services/userservice/userservice';
import {NgForm} from '@angular/forms';
import {modifyswinger} from '../../../../urls/userurls/swingerurls/swingerurls/swingerurls';

@Component({
  selector: 'app-preferedageranges',
  templateUrl: './preferedageranges.component.html',
  styleUrls: ['./preferedageranges.component.css']
})
export class PreferedagerangesComponent implements OnInit, OnDestroy {

  constructor(private http: Httpservice, private user: Userservice) { }
  under18error = false;

  usersubject;
  userobject;

  updateagepreference(form:NgForm){
    if(form.value.minage < 18){
      this.under18error = true;
      setTimeout(()=>{
        this.under18error = false;
      }, 3000);


    }
    const url = modifyswinger + String(this.userobject.swinger_set[0].pk);
    const payload = {
      minpreferedage: form.value.minage,
      maxpreferedage: form.value.maxage
    };
    this.http.put(url, payload)
      .subscribe(
        (req:any)=>{
          this.userobject.swinger_set[0] = req.body;
          this.user.sendmodifiedlifestyleuserobject(this.userobject);
        }
      );
  }

  ngOnInit() {
    this.usersubject = this.user.recieivelifestyleuserobject()
      .subscribe(
        (req:any)=>{
          if(req != null){
            this.userobject = req;
          }
        }
      );
  }

  ngOnDestroy(){
    this.usersubject.unsubscribe();
  }

}
