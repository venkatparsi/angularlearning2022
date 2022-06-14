import { Component } from '@angular/core';
import { trigger,state,style,animate,transition} from '@angular/animations';
import 'reset-css';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-app-web';
  
  navLinks = [
    {location:'/explore',label:'Explore',icon:'menu_book',id:"exploreLink"},
    { location: '/progress', label: 'Progress', icon: 'moving',id:"progresLink" },
    { location: '/community', label: 'Community', icon: 'group',id:"communityLink" },   
    { location: '/more', label: 'More', icon: 'dynamic_feed',id:"moreLink" }
  ];

  activeLink:string = this.navLinks[1].id;

  setActiveLink = (link:any,id:string) => {
    console.log("Active link to be set is:",link,id);
    if(document.getElementById(id)){
      var link:any = document.getElementById(this.activeLink);
      link.style.borderTopStyle = "2px solid ";
      link.style.borderTopColor = "grey"
      link.style.color = "grey"
      var link2:any = document.getElementById(id);
      link2.style.borderTopStyle = "2px solid ";
      link2.style.borderTopColor = "blue ";
      link2.style.color = "blue";
    }
    this.activeLink = id;
  }
}
