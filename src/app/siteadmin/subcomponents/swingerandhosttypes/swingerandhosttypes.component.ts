import {Component, OnInit, ViewChild} from '@angular/core';
import {Httpservice} from '../../../services/httpservice/httpservice';
import {NgForm} from '@angular/forms';
import {swingtypeallorcreate, swingtypedetail} from '../../../urls/siteadminurls/settingsurls/swingtypeurls/swingtypeurls';
import {hosttypeallorcreate, hosttypedetail} from '../../../urls/siteadminurls/settingsurls/hosttypeurls/hosttypeurls';

@Component({
  selector: 'app-swingerandhosttypes',
  templateUrl: './swingerandhosttypes.component.html',
  styleUrls: ['./swingerandhosttypes.component.css'],
  providers: [Httpservice]
})
export class SwingerandhosttypesComponent implements OnInit {

  constructor(private http: Httpservice) { }

  swingtypes = [];
  hosttypes = [];
  swingtypeedit = false;
  hosttypeedit = false;
  activeswingeditindex = null;
  activehosteditindex = null;



  typeedittoggle(type, index){
    if(type === 'swing'){
      this.swingtypeedit = !this.swingtypeedit;
      this.activeswingeditindex = index;
      if(!this.swingtypeedit){
        this.activeswingeditindex = null;
      }

    }
    if(type === 'host'){
      this.hosttypeedit = !this.hosttypeedit;
      this.activehosteditindex = index;
      if(!this.hosttypeedit){
        this.activehosteditindex = null;
      }
    }
  }

  @ViewChild('addswingtypeform') addswingtypeform:NgForm;

  addswingtype(){
    console.log(this.addswingtypeform);
   const url = swingtypeallorcreate;
   const payload = {
     name: this.addswingtypeform.form.value.addswing,
     couple: this.addswingtypeform.form.value.couplecheckbox
   };
   this.http.post(url, payload)
     .subscribe(
       (req: any)=>{
         this.swingtypes.push(req.body);
         this.addswingtypeform.reset();
       }
     );
  }


  action(actiontype, type, index, form:NgForm){
    console.log('this is the form');
    console.log(form);
    let payload = null;
    let url = null;

    if(actiontype === 'post'){
      if(type === 'swingtype'){
        url = swingtypeallorcreate;
        payload = {
          name: form.form.value.addswing
        };
      }

      if(type === 'hosttype'){
        url = hosttypeallorcreate;
        payload = {
          name: form.value.addhosttype
        };
        console.log('this should not be firing');
      }

      this.http.post(url, payload)
        .subscribe(
          (req: any)=>{
            if(type === 'swingtype'){
              this.swingtypes.push(req.body);
              return;
            }
            if(type === 'hosttype'){
              this.hosttypes.push(req.body);
              form.reset();
              return;
            }
          });
    }
    if(actiontype === 'put'){
      if(type === 'swingtype'){
        url = swingtypedetail + String(this.swingtypes[index].id);
        payload = {
          name: form.value.editswingtype,
          couple: form.value.editswingcouple
        };
      }
      if(type === 'hosttype'){
        url = hosttypedetail + String(this.hosttypes[index].id);
        payload = {
          name: form.value.edithosttype
        };
      }
      this.http.put(url, payload)
        .subscribe(
          (req: any)=>{
            if(type === 'swingtype'){
              this.swingtypes[index] = req.body;
              this.swingtypeedit = false;
              this.activeswingeditindex = null;
              form.reset();
              return;
            }
            if(type === 'hosttype'){
              this.hosttypes[index] = req.body;
              this.hosttypeedit = false;
              this.activehosteditindex = null;
              return;
            }
          });
    }

    if(actiontype === 'delete'){
      if(type === 'swingtype'){
        url = swingtypedetail + String(this.swingtypes[index].id);
        this.http.delete(url)
          .subscribe(
            (req: any)=>{
              this.swingtypes.splice(+index, 1);
              return;
            }
          );
      }
      if(type === 'hosttype'){
        url = hosttypedetail + String(this.hosttypes[index].id);
        this.http.delete(url)
          .subscribe(
            (req: any)=>{
              this.hosttypes.splice(+index, 1);
              return;
            }
          );
      }
    }

  }


  ngOnInit() {
    const swingurl = swingtypeallorcreate;
    this.http.get(swingurl)
      .subscribe(
        (req: any)=>{
          this.swingtypes = req.body;
        }
      );
    const hosturl = hosttypeallorcreate;
    this.http.get(hosturl)
      .subscribe(
        (req: any)=>{
          this.hosttypes = req.body;
        }
      );

  }

}
