import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: '.app-profile-pic-card',
  templateUrl: './profile-pic-card.component.html',
  styleUrls: ['./profile-pic-card.component.css']
})
export class ProfilePicCardComponent implements OnInit {
  @Input('inData') inData: any;
  constructor() {
    console.log("indata:",this.inData)
   }

  ngOnInit(): void {
  }

}
