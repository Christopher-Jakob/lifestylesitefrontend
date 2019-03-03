import {Component, OnDestroy, OnInit} from '@angular/core';
import {Httpservice} from '../../../../services/httpservice/httpservice';
import {getdeleteverificationphotocodeurl, postnewverificationphotocodeurl} from '../../../../urls/verificationphotourls/codeurls/codeurls';
import {s3presignedurl} from '../../../../urls/awsurls/awsurls';
import {modifyswinger} from '../../../../urls/userurls/swingerurls/swingerurls/swingerurls';
import {Userservice} from '../../../../services/userservice/userservice';

@Component({
  selector: 'app-preferedbodytypes',
  templateUrl: './preferedbodytypes.component.html',
  styleUrls: ['./preferedbodytypes.component.css']
})
export class PreferedbodytypesComponent implements OnInit, OnDestroy {

  constructor(private http: Httpservice, private userservice: Userservice) { }

  showuploadform = false;
  uploadsucess = false;
  bodytypeverificationcode;
  bodytypeverificationphoto;

  swingersubject;
  swingerobject;

  toggleshowuploadform(){
    this.showuploadform = !this.showuploadform;
  }

  toggleshowuploadsucess(){
    this.uploadsucess = !this.uploadsucess;
  }

  uploadbodytypeverificationphoto(){
    const photo = this.bodytypeverificationphoto;
    let databasekey = null;
    let uriroot = null;
    const presignedimageurl = s3presignedurl + 'image';
    this.http.get(presignedimageurl)
      .subscribe(
        (req:any)=>{
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
              (req: any)=>{
                const url = getdeleteverificationphotocodeurl + String(this.bodytypeverificationcode.id) + '/' + String(this.bodytypeverificationphoto.code);
                this.http.get(url)
                  .subscribe(
                    (req:any)=>{
                      const pk = this.swingerobject.swinger_set[0].pk;
                      const url = modifyswinger + String(pk);
                      const payload = {
                        bodytypeverificationphoto: uriroot + databasekey,
                        bodytypeverificationphotokey: databasekey,
                        bodytypeverificationphotocode: this.bodytypeverificationphoto.code,
                        optinbodytypefiltering: true,
                        bodytypesubmissiondate: null

                      };
                      this.http.put(url, payload)
                        .subscribe(
                          (req:any)=>{
                            this.toggleshowuploadsucess();
                          });
                    });
              });
        });
  }

  ngOnInit() {
    this.swingersubject = this.userservice.recieivelifestyleuserobject()
      .subscribe(
        (req: any)=>{
          if(req != null){
            this.swingerobject = req.body;
          }
        }
      );

    // get photo verification code
    this.http.post(postnewverificationphotocodeurl, null)
      .subscribe(
        (req:any)=>{
          this.bodytypeverificationcode = req.body;

        }
      );
  }

  ngOnDestroy(){
    this.swingersubject.unsubscribe();
  }

}
