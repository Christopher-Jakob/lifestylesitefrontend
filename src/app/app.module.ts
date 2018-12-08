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
    NewsfeeditemComponent
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
