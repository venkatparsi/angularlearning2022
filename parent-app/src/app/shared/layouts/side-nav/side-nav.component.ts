import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  menuList: any = [];
  @Output() menuDetailsEmitter: EventEmitter<any> = new EventEmitter<any>()
  constructor(private sharedService: SharedService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sharedService.getMenu().subscribe(data => {
      console.log(data)
      this.menuList = data;
     // this.menuList = this.menuList.sort((a, b) => a.order > b.order ? 1 : -1);
    //  const currentActiveRoute = this.activatedRoute.firstChild.url['value'][0].path;
     // this.onMenuChange(this.menuList.filter(menuItem => menuItem.route == currentActiveRoute)[0]);
    }, error => {
      console.log('Unable to fetch menu');
    })
  }

  onMenuChange(menu:any) {

    this.menuDetailsEmitter.emit(menu)
  }

}
