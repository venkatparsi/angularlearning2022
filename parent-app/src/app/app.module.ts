import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './features/home/home.component';
import { ExploreComponent } from './features/explore/explore.component';
import { ProgressComponent } from './features/progress/progress.component';
import { ProfileComponent } from './features/profile/profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommunityComponent } from './features/community/community.component';
import { AddNewPostComponent } from './features/community/community.component';
import { MatDialogModule }  from '@angular/material/dialog';
import {  MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MoreComponent } from './features/more/more.component';
import { AboutComponent } from './features/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreComponent,
    ProgressComponent,
    ProfileComponent,
    CommunityComponent,
    AddNewPostComponent,
    MoreComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FlexLayoutModule,
    FlexLayoutModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
