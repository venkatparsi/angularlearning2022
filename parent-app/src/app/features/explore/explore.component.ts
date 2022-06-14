import { Component, OnInit } from '@angular/core';
export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  search : String ="";
    
  folders: Section[] = [
    {
      name: 'Admissions',
      updated: new Date('1/1/22'),
    },
    {
      name: 'Exam Anxiety',
      updated: new Date('1/17/16'),
    },
    {
      name: 'School Rankings',
      updated: new Date('1/28/22'),
    },
    {
      name: 'School Rankings2',
      updated: new Date('1/28/22'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  getRandomColor(): String {
   return '#'+Math.floor(Math.random()*16777215).toString(16)
  }

}
