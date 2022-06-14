import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts//footer/footer.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './layouts//side-nav/side-nav.component';
import { SubSideNavComponent } from './layouts//sub-side-nav/sub-side-nav.component';
import { SharedService } from './service/shared.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AngularMaterialModule} from './angular-material/angular-material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilePicCardComponent } from './components/profile-pic-card/profile-pic-card.component';
import { ProfileHeaderCardComponent } from './components/profile-header-card/profile-header-card.component'
@NgModule({
  declarations: [HeaderComponent, FooterComponent, SideNavComponent, 
    SubSideNavComponent, ProfilePicCardComponent, ProfileHeaderCardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    RouterModule,
    AngularMaterialModule,
    BrowserAnimationsModule 
  ],
  providers: [SharedService, ],
  exports: [HeaderComponent, FooterComponent, SideNavComponent,
    ProfilePicCardComponent, ProfileHeaderCardComponent,
     SubSideNavComponent,AngularMaterialModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
