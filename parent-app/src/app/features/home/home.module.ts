import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';




@NgModule({
  declarations: [HomeComponent,MatSidenavContainer,MatDrawerContainer],
  imports: [
    CommonModule,    
    SharedModule,
    MatSidenavModule    
  ],
  exports:[],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class HomeModule { }
