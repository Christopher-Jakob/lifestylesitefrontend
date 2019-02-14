import {BehaviorSubject, Observable} from 'rxjs';

export class ShowHideService{

  constructor(){}

  // landing page login show hide

  private landingpageloginshowhidesubject = new BehaviorSubject(null);

  sendchangelandingpageloginshowhide(){
    this.landingpageloginshowhidesubject.next(1);
  }

  receivechangelandingpageloginshowhide():Observable<any>{
    return this.landingpageloginshowhidesubject.asObservable();
  }




}
