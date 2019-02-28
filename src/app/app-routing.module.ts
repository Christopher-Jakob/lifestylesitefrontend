import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingpageComponent} from './main/landingpage/landingpage.component';
import {SwingerhomepageComponent} from './swinger/swingerhomepage/swingerhomepage.component';
import {SwingersignupComponent} from './main/swingersignup/swingersignup.component';
import {SiteadminmainComponent} from './siteadmin/siteadminmain/siteadminmain.component';
import {SwingerprofileComponent} from './swinger/swingerprofile/swingerprofile.component';
import {PreferencesandsettingsComponent} from './swinger/preferencesandsettings/preferencesandsettings.component';

const routes: Routes = [
  {path: '', component: LandingpageComponent },
  {path: 'home', component: SwingerhomepageComponent},
  {path: 'user/:pk', component: SwingerprofileComponent},
  {path: 'user/:pk/prefsettings', component: PreferencesandsettingsComponent},
  {path: 'swingersignup', component: SwingersignupComponent},
  {path: 'siteadmin', component: SiteadminmainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
