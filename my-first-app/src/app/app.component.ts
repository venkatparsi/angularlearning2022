import { Component } from '@angular/core';
import { ktdTrackById,KtdGridLayout } from '@katoid/angular-grid-layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Venkat';
  name = 'Maxmillian';
  cols: number = 6;
rowHeight: number = 100;
layout: KtdGridLayout = [
    {id: '0', x: 0, y: 0, w: 3, h: 3},
    {id: '1', x: 3, y: 0, w: 3, h: 3},
    {id: '2', x: 0, y: 3, w: 3, h: 3},
    {id: '3', x: 3, y: 3, w: 3, h: 3},
];
trackById = ktdTrackById



onLayoutUpdated(layout: KtdGridLayout) {
  console.log('on layout updated', layout);
  this.layout = layout;
}

}
