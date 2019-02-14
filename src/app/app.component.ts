import { Component } from '@angular/core';
import {ShowHideService} from './services/controlservices/showhideservice/showhideservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShowHideService]
})
export class AppComponent {
  title = 'lifestylesite';
}
