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
  private lifestyleuserobjectsubject = new BehaviorSubject(null);

  sendlifestyleuserobject(){
    this.lifestyleuserobjectsubject.next(this.lifestyleuserobject);
  }

  recieivelifestyleuserobject():Observable<any>{
    return this.lifestyleuserobjectsubject.asObservable();
  }

  // object for the base lifestyleuser
  lifestyleuserobject;


  // stores token to local storage persisting it perminatley
  savelocalstoragetoken(token){
    localStorage.setItem('token', token);
    sessionStorage.setItem(('token'), token);
  }

  // stores token to session storeage persisting it for session only
  savesessionstoragetoken(token){
    sessionStorage.setItem('token', token);

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
            this.sendlifestyleuserobject();
            });
          }
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
           this.savelocalstoragetoken(token);

          }
          if(!rememberme){
            this.savesessionstoragetoken(token);
          }
          this.getlifestyleuser();
        }
      );
  }


}
