import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-profile-header-card',
  templateUrl: './profile-header-card.component.html',
  styleUrls: ['./profile-header-card.component.css']
})
export class ProfileHeaderCardComponent implements OnInit {

  @Input('name') name: any;
  @Input('heading') heading: any;

  constructor() { }

  ngOnInit(): void {
  }

}
