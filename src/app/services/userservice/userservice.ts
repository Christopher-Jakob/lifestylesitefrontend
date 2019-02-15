import {Injectable} from '@angular/core';
import {Httpservice} from '../httpservice/httpservice';


@Injectable()
export class Userservice{

  constructor(private http: Httpservice){}


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

  // check session storage for token
  checksessionfortoken(){
    if(sessionStorage.length > 0){
      const token = sessionStorage.getItem('token');
      return token;
    } else{
      return null;
    }
  }



  // attempts to authorize user
  attemptuserlogin(payload){
    const rememberme = payload.remember;
    const payload = {
      email : payload.email,
      password: payload.password
    };
    this.http.post(url, payload)
      .subscribe(
        (req: any)=>{
          if(rememberme){
            this.savesessionstoragetoken('tokengoeshere');

          }
          if(!rememberme){
            this.savesessionstoragetoken('tokengoeshere');
          }
        }
      );
  }


}
