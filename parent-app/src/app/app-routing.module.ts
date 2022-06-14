import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './features/explore/explore.component';
import { HomeComponent } from './features/home/home.component';
import { ProgressComponent } from './features/progress/progress.component';
import { ProfileComponent } from './features/profile/profile.component';
import { CommunityComponent } from './features/community/community.component';
import { MoreComponent } from './features/more/more.component';
import { AboutComponent } from './features/about/about.component';

const routes: Routes = [
  {
    path:'',component: HomeComponent
  },
  {
    path:'explore', component: ExploreComponent
  },
  {
    path:'progress',component: ProgressComponent
  },
  {
    path:'profile',component: ProfileComponent
  },
  {
    path:'community', component: CommunityComponent
  },
  {
    path:'more', component: MoreComponent
  },
  {
    path:'about', component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
