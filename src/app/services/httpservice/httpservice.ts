import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class Httpservice{

  constructor(private http: HttpClient){}

  get(url){
    return this.http.get(url, { observe: 'response' });
  }

  delete(url){
    return this.http.delete(url, { observe: 'response' });
  }

  put(url, payload){
    return this.http.put(url, payload, { observe: 'response' });
  }

  post(url, payload){
    return this.http.post(url, payload, { observe: 'response' });
  }
}
