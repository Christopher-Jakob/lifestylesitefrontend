import {Component, OnDestroy, OnInit} from '@angular/core';
import {Userservice} from '../../../../services/userservice/userservice';
import {Router} from '@angular/router';

@Component({
  selector: 'app-swingerhomepagemenu',
  templateUrl: './swingerhomepagemenu.component.html',
  styleUrls: ['./swingerhomepagemenu.component.css']
})
export class SwingerhomepagemenuComponent implements OnInit, OnDestroy {

  constructor(private userservice: Userservice, private router: Router) { }

  userservicesubscription;
  swingerobject;

  upcomingevents = [
    {
      eventname: 'Sexy Event Name',
      date: '12-31-18',
      time: '7pm'
    },
    {
      eventname: 'Sexy Event Name',
      date: '12-31-18',
      time: '7pm'
    },
    {
      eventname: 'Sexy Event Name',
      date: '12-31-18',
      time: '7pm'
    },
    {
      eventname: 'Sexy Event Name',
      date: '12-31-18',
      time: '7pm'
    },

  ];

  eventhosts = [
    {
      name: 'Young Couples Party',
    },
    {
      name: 'Invite Only'
    },
    {
      name: 'Cool Ass Party Place'
    }
  ];

  usergroups = [
    {
      name: 'Orgies On Tuesday'
    },
    {
      name: 'Something Every Friday'
    },
    {
      name: 'We like cars'
    }
  ];

  navigatetoprofile(){
    const userpk = this.swingerobject.swinger_set[0].user;
    this.router.navigate(['/user', userpk]);
  }

  navigatetoprefsettings(){
    const userpk = this.swingerobject.swinger_set[0].user;
    this.router.navigate(['/user', userpk, 'prefsettings']);
  }

  ngOnInit() {
    this.userservicesubscription = this.userservice.recieivelifestyleuserobject()
      .subscribe(
        (req: any)=>{
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
