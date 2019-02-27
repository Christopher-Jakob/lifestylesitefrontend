import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  postgetallsexualorientation,
  sexualorientationdetail
} from '../../../urls/siteadminurls/settingsurls/sexualorientationurls/sexualorientationurl';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-swingersexualorientation',
  templateUrl: './swingersexualorientation.component.html',
  styleUrls: ['./swingersexualorientation.component.css'],
  providers: [HttpClient]
})
export class SwingersexualorientationComponent implements OnInit {

  constructor(private http: HttpClient) { }

  orientationtypes = [];


  addorientation(form: NgForm){
    const payload = {
      name: form.value.orientationadd
    };
    this.http.post(postgetallsexualorientation, payload)
      .subscribe(
        (req: any)=>{
          this.orientationtypes.push(req);
          form.reset();
        }
      );
  }

  deleteorientation(index){
    const pk = this.orientationtypes[index].id;
    const url = sexualorientationdetail + String(pk);
    this.http.delete(url)
      .subscribe(
        (req: any)=>{
          this.orientationtypes.splice(+index, 1);
        }
      );
  }

  ngOnInit() {
    this.http.get(postgetallsexualorientation)
      .subscribe(
        (req: any)=>{
          this.orientationtypes = req;
        }
      );
  }

}
