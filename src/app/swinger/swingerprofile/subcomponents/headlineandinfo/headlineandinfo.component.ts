import {Component, OnDestroy, OnInit} from '@angular/core';
import {Userservice} from '../../../../services/userservice/userservice';

@Component({
  selector: 'app-headlineandinfo',
  templateUrl: './headlineandinfo.component.html',
  styleUrls: ['./headlineandinfo.component.css']
})
export class HeadlineandinfoComponent implements OnInit, OnDestroy {

  constructor(private userservice: Userservice) { }

  userservicesubscription;
  swingerobject;

  ngOnInit() {
    this.userservicesubscription = this.userservice.recieivelifestyleuserobject()
      .subscribe(
        (req:any)=>{
          if(req != null){
            this.swingerobject = req;
            console.log(this.swingerobject);
          }

        }
      );
  }

  ngOnDestroy(){
    this.userservicesubscription.unsubscribe();
  }

}
