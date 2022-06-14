import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  
  navLinks = [
    {location:'/explore',label:'Explore',icon:'menu_book'},
    { location: '/progress', label: 'Progress', icon: 'moving' },
    { location: '/community', label: 'Community', icon: 'group' },   
    { location: '/more', label: 'More', icon: 'dynamic_feed' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
