import { Component, OnInit } from '@angular/core';
import {Httpservice} from '../../../services/httpservice/httpservice';
import {allhosts} from '../../../urls/userurls/hosturls/hosturls/hosturls';
import {getallswingers} from '../../../urls/userurls/swingerurls/swingerurls/swingerurls';

@Component({
  selector: 'app-swingerhostsignup',
  templateUrl: './swingerhostsignup.component.html',
  styleUrls: ['./swingerhostsignup.component.css'],
  providers: [Httpservice]
})
export class SwingerhostsignupComponent implements OnInit {

  constructor(private http: Httpservice) { }

  signedupswingers = [];
  signeduphosts = [];


  ngOnInit() {

    this.http.get(allhosts)
      .subscribe(
        (req: any)=>{
          this.signeduphosts = req.body;
          console.log(this.signeduphosts);

        });

    this.http.get(getallswingers)
      .subscribe(
        (req: any)=>{
          this.signedupswingers = req.body;
          console.log(this.signedupswingers);
        });

  }

}
