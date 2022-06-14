import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-side-nav',
  templateUrl: './sub-side-nav.component.html',
  styleUrls: ['./sub-side-nav.component.scss']
})
export class SubSideNavComponent implements OnInit, OnChanges {
  @Input() menuDetails:any;
  currentActiveRoute: string = '';
  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.menuDetails);
  //  this.currentActiveRoute = this.activatedRoute.firstChild.url['value'][0].path;
    console.log(this.currentActiveRoute);
  }

  ngOnInit(): void {
    console.log(this.menuDetails)
  }
  

}
