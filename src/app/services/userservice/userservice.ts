import {Injectable} from '@angular/core';
import {Httpservice} from '../httpservice/httpservice';
import {authorizeuseer} from '../../urls/JWTtokenurls/JWTtokenurls';
import {swingerlogin, userlogin} from '../../urls/userurls/userurl/userurl';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable()
export class Userservice{

  constructor(private http: Httpservice, private router: Router){}

  // behavior subject to send the swinger object + send and receieve
  private swingerobjectsubject = new BehaviorSubject(null);

  sendswingerobject(){
    this.swingerobjectsubject.next(this.swingeruserobject);
  }

  receiveswingerobject():Observable<any>{
    return this.swingeruserobject.asObservable();
  }

  // behavior subject to send the host object + send and receive
  private hostobjectsubject = new BehaviorSubject(null);

  sendhostobject(){
    this.hostobjectsubject.next(this.hostuserobject);
  }

  receivehostobject():Observable<any>{
    return this.hostobjectsubject.asObservable();
  }

  // behavior subject to send the admin object + send and receive

  private adminobjectsubject = new BehaviorSubject(null);

  sendadminobject(){
    this.adminobjectsubject.next(this.adminuserobject);
  }

  receiveadminobject():Observable<any>{
    return this.adminobjectsubject.asObservable();
  }



  // object for the base lifestyleuser
  lifestyleuserobject;

  // object for the swingeruser object if user is swinger
  swingeruserobject;

  // object for the adminuser object if user is admin
  adminuserobject;

  // object for the hostuser object if user is host
  hostuserobject;


  // stores token to local storage persisting it perminatley
  savelocalstoragetoken(token){
    localStorage.setItem('token', token);
    sessionStorage.setItem(('token'), token);
  }

  // stores token to session storeage persisting it for session only
  savesessionstoragetoken(token){
    localStorage.setItem('token', token);

  }

  // check local storage for token
  checklocalfortoken(){
    if(localStorage.length > 0){
      const token = localStorage.getItem('token');
      return token;
    } else{
      return null;
    }

  }

  //logs a user out of the system
  logout(){
    localStorage.clear();
    sessionStorage.clear();
    this.lifestyleuserobject = null;
    this.swingeruserobject = null;
    this.adminuserobject = null;
    this.router.navigate([]);


  }

  // check session storage for token
  checksessionfortoken(){
    if(sessionStorage.length > 0){
      const token = sessionStorage.getItem('token');
      return token;
    } else{
      return null;
    }
  }

  // gets the base lifestyle user from the database

  getlifestyleuser(){
    let token = this.checklocalfortoken();
    if(token == null){
      token = this.checksessionfortoken();
    }
    if(token != null){
      this.http.get(userlogin)
        .subscribe(
          (req: any)=>{
            this.lifestyleuserobject = req.body;
            const swinger = this.lifestyleuserobject.isswinger;
            const swingerapproved = this.lifestyleuserobject.isswingerapproved;
            if(swinger && swingerapproved){
              this.getswingerobject();
            }
            const host = this.lifestyleuserobject.ishost;
            const hostapproved = this.lifestyleuserobject.ishostapproved;
            if(host && hostapproved){
              this.gethostobject();
            }
            const admin = this.lifestyleuserobject.isadmin;
            const adminapproved = this.lifestyleuserobject.isadminapproved;
            if(admin && adminapproved){
              this.getadminobject();
            }

          }
        );


    }
  }

  // gets swinger object from a user objects pk if user is swinger
  getswingerobject(){
    const baselifestylepk = this.lifestyleuserobject.pk;
    const url = swingerlogin + String(baselifestylepk);
    this.http.get(url)
      .subscribe(
        (req: any)=>{
          this.swingeruserobject = req.body;
          this.sendswingerobject();
        }
      );


  }
  // gets host object from a user objects pk if user is host
  gethostobject(){
    //todo
  }

  // gets admin object from a user objects pk if user is admin
  getadminobject(){
    //todo
  }



  // attempts to authorize user
  attemptuserlogin(data){
    const rememberme = data.remember;
    const payload = {
      email : data.email,
      password: data.password
    };
    this.http.post(authorizeuseer, payload)
      .subscribe(
        (req: any)=>{
          const token = req.body.token;
          if(rememberme){
            this.savesessionstoragetoken(token);

          }
          if(!rememberme){
            this.savesessionstoragetoken(token);
          }
          this.getlifestyleuser();
        }
      );
  }


}
