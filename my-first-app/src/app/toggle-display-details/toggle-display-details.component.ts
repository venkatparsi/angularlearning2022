import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-display-details',
  templateUrl: './toggle-display-details.component.html',
  styleUrls: ['./toggle-display-details.component.css']
})
export class ToggleDisplayDetailsComponent implements OnInit {

  constructor() { }

  showDetails = false;
  log = [];

  ontoggleDisplay(){
    this.showDetails = !this.showDetails;
    this.log.push(this.log.length + 1 + " " + new Date())
  }

  ngOnInit(): void {
  }

}
