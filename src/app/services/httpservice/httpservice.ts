import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class Httpservice{

  constructor(private http: HttpClient){}

  get(url){
    return this.http.get(url);
  }

  delete(url){
    return this.http.delete(url);
  }

  put(url, payload){
    return this.http.put(url, payload);
  }

  post(url, payload){
    return this.http.post(url, payload);
  }
}
