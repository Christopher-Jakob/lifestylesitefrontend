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
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SwingerandhosttypesComponent } from './siteadmin/subcomponents/swingerandhosttypes/swingerandhosttypes.component';
import { SwingerhostsignupComponent } from './siteadmin/subcomponents/swingerhostsignup/swingerhostsignup.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SextypeandethnictypesComponent } from './siteadmin/subcomponents/sextypeandethnictypes/sextypeandethnictypes.component';

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
    SextypeandethnictypesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ScrollToModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
