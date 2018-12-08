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
    UpcomingeventsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
