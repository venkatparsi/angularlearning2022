import { Component } from '@angular/core';
import 'reset-css';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-app-web';
  
  navLinks = [
    {location:'/explore',label:'Explore',icon:'menu_book'},
    { location: '/progress', label: 'Progress', icon: 'moving' },
    { location: '/community', label: 'Community', icon: 'group' },   
    { location: '/more', label: 'More', icon: 'dynamic_feed' }
  ];

}
