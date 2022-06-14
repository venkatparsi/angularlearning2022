import { Component, Directive, OnInit } from '@angular/core';
import { ArtifactService } from 'src/app/shared/service/artifact.service';
import configData from "../../../assets/configdata/metrics-data.json";
import { transition, trigger,style,animate } from '@angular/animations';

export interface Student {
  name: string;
  marks: number[];
}

export interface MetricType {
  METRIC_NAME: string;
  LABEL: string;
  ICON: string;
  COLOR: string;
}




@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity:0}),
        animate(2000,style({opacity:1}))
      ]),
    
      transition('* => void', [
        style({opacity:1}),
        animate(2000,style({opacity:0}))
      ])],
)]
})
export class ProgressComponent implements OnInit {
  students: Student[] = [];
  constructor(public artifactService: ArtifactService) { }

  childInfo: any = {
    name: 'Arpit',
  };

  getValueByKey = (object: Object, keyValue: string) => {
    return Object.keys(object).find(key => key === keyValue)
  }

  getValueByKeyInArray = (arrObject: MetricType[], keyValue: string) => {
    let obj = arrObject.find(o => o.METRIC_NAME === keyValue);
    return obj;
  }

  lookup = (value: string) => {
    return this.getValueByKeyInArray(configData.METRICS, value);
  }

  getMetricColor(value: string) {
    var metricObj = this.lookup(value);
    if (!metricObj) return "";
    else return metricObj?.COLOR;
  }

  getMetricLabel(value: string) {
    var metricObj = this.lookup(value);
    if (!metricObj) return "";
    else return metricObj?.LABEL;
  }

  ngOnInit(): void {
    console.group("Progress:Metrics data...");
    console.log(configData.METRICS);
    console.log("EDUCATION:", this.getMetricColor("EDUCATION"));
    console.groupEnd();
    console.group("Progress:Profile data...");
    console.log("Indata in profile page:", this.childInfo)
    var childrenPromise = this.artifactService.getAll('children');
    childrenPromise.then((result) => {
      this.childInfo = [...result.data]
      console.log("Result", this.childInfo)
      console.groupEnd();
    })


    /* fetch('./data.json').then(response => {
       console.log(response);
       return response.json();
     }).then(data => {
       // Work with JSON data here
       console.log(data);
     }).catch(err => {
       // Do something for an error here
       console.log("Error Reading data " + err);
     });*/

  }

}
