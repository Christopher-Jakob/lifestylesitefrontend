import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowsematchesComponent } from './browsematches/browsematches.component';
import { SwingersignupComponent } from './main/swingersignup/swingersignup.component';
import {FormsModule} from '@angular/forms';
import { PreferencesandsettingsComponent } from './swinger/preferencesandsettings/preferencesandsettings.component';
import { SwingerprofileComponent } from './swinger/swingerprofile/swingerprofile.component';
import { ProfileandcoverphotoComponent } from './swinger/swingerprofile/subcomponents/profileandcoverphoto/profileandcoverphoto.component';
import { HeadlineandinfoComponent } from './swinger/swingerprofile/subcomponents/headlineandinfo/headlineandinfo.component';
import { PostcreateComponent } from './swinger/swingerprofile/subcomponents/postcreate/postcreate.component';
import { NewsfeeditemComponent } from './swinger/swingerprofile/subcomponents/newsfeeditem/newsfeeditem.component';
import { UploadedpicturesComponent } from './swinger/swingerprofile/subcomponents/uploadedpictures/uploadedpictures.component';
import { UploadedvideosComponent } from './swinger/swingerprofile/subcomponents/uploadedvideos/uploadedvideos.component';
import { MatchedswingattributesComponent } from './swinger/swingerprofile/subcomponents/matchedswingattributes/matchedswingattributes.component';
import { UpcomingeventsComponent } from './swinger/swingerprofile/subcomponents/upcomingevents/upcomingevents.component';
import { SwingerhomepageComponent } from './swinger/swingerhomepage/swingerhomepage.component';
import { SwingerhomepagemenuComponent } from './swinger/swingerhomepage/subcomponents/swingerhomepagemenu/swingerhomepagemenu.component';
import { LandingpageComponent } from './main/landingpage/landingpage.component';
import { SiteadminmainComponent } from './siteadmin/siteadminmain/siteadminmain.component';
import { LocationsComponent } from './siteadmin/subcomponents/locations/locations.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { SwingerandhosttypesComponent } from './siteadmin/subcomponents/swingerandhosttypes/swingerandhosttypes.component';
import { SwingerhostsignupComponent } from './siteadmin/subcomponents/swingerhostsignup/swingerhostsignup.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SextypeandethnictypesComponent } from './siteadmin/subcomponents/sextypeandethnictypes/sextypeandethnictypes.component';
import {RouterModule, Routes} from '@angular/router';
import { SwingersignupapprovalComponent } from './siteadmin/subcomponents/swingersignupapproval/swingersignupapproval.component';
import { SwingersignupdeclinereasonsComponent } from './siteadmin/subcomponents/swingersignupdeclinereasons/swingersignupdeclinereasons.component';
import { PreferedswingertypesComponent } from './swinger/preferencesandsettings/subcomponents/preferedswingertypes/preferedswingertypes.component';
import { HeaderloginformComponent } from './main/loginforms/headerloginform/headerloginform.component';
import {Httpservice} from './services/httpservice/httpservice';
import {TokenInterceptor} from './services/interceptors/httpauthinterceptor';
import {Userservice} from './services/userservice/userservice';
import { SwingersexualorientationComponent } from './siteadmin/subcomponents/swingersexualorientation/swingersexualorientation.component';



@NgModule({
  declarations: [
    AppComponent,
    BrowsematchesComponent,
    SwingersignupComponent,
    PreferencesandsettingsComponent,
    SwingerprofileComponent,
    ProfileandcoverphotoComponent,
    HeadlineandinfoComponent,
    PostcreateComponent,
    NewsfeeditemComponent,
    UploadedpicturesComponent,
    UploadedvideosComponent,
    MatchedswingattributesComponent,
    UpcomingeventsComponent,
    SwingerhomepageComponent,
    SwingerhomepagemenuComponent,
    LandingpageComponent,
    SiteadminmainComponent,
    LocationsComponent,
    SwingerandhosttypesComponent,
    SwingerhostsignupComponent,
    SextypeandethnictypesComponent,
    SwingersignupapprovalComponent,
    SwingersignupdeclinereasonsComponent,
    PreferedswingertypesComponent,
    HeaderloginformComponent,
    SwingersexualorientationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ScrollToModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[RouterModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true

  },
    Httpservice,
  Userservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
