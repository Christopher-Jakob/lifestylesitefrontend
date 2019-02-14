import { Component, OnInit } from '@angular/core';
import {ShowHideService} from '../../../services/controlservices/showhideservice/showhideservice';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-headerloginform',
  templateUrl: './headerloginform.component.html',
  styleUrls: ['./headerloginform.component.css']
})
export class HeaderloginformComponent implements OnInit {

  constructor(private showhideservice: ShowHideService) { }

  // send landing page login form show hide command
  sendshowhidecommand(){
    this.showhideservice.sendchangelandingpageloginshowhide();
  }

  // forgot password var
  showforgotpassword = false;

  //forgot pasword toggle
  toggleforgotpassword(){
    this.showforgotpassword = !this.showforgotpassword;
  }

  // logs user in
  login(form:NgForm){

    const payload = {
      email: form.value.loginemail,
      password: form.value.password,
      remember: form.value.remembercheckbox
    };

  }

  // executes forgot password
  executeforgotpassword(){
    //todo
  }



  ngOnInit() {
  }

}
