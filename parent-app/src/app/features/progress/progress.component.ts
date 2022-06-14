import { Component, OnInit } from '@angular/core';
// import * as internal from 'stream';
import { PointsService } from './points.service';
import { ArtifactService } from 'src/app/shared/service/artifact.service';

export interface Student{
  name: string;
  marks: number[];
}
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  students: Student[] =[];
  constructor(public pointsService: PointsService, public artifactService: ArtifactService) { }
  childInfo:any = {
    name: 'Arpit',
    };

  ngOnInit(): void {
    let response = this.pointsService.getPoints();
    response
        .then( (res) => {
          console.log("returned value: ",[...res.data]);
          this.students = [...res.data];
        })
        .catch(function (err){
          console.log(err);
        });

        console.log("Indata in profile page:",this.childInfo)
        var childrenPromise = this.artifactService.getAll('children');
        childrenPromise.then((result)=> {    
          this.childInfo = [...result.data]
          console.log("Result",this.childInfo)
        })
    
  }

}
