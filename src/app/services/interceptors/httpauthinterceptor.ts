import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Userservice} from '../userservice/userservice';
import {Observable} from 'rxjs';


@Injectable()
export class TokenInterceptor implements  HttpInterceptor{
  constructor(private tokenservice:  Userservice){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let token = this.tokenservice.checklocalfortoken();
    if(token == null){
     token = this.tokenservice.checksessionfortoken();
    }
    if(token != null){
      if(request.url != 'https://libidnouslonge.s3.amazonaws.com/'){
        request = request.clone({
          setHeaders: {
            Authorization: 'JWT ' + token
          }
        });
      }
    }
    return next.handle((request));
  }
}
