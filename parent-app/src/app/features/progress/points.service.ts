import { Injectable } from '@angular/core';
import  { ArtifactService } from "../../shared/service/artifact.service";

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  constructor(public artifactService:ArtifactService) { }

  
  getPoints() {
    let result = this.artifactService.getAll('points');
    return result;
  }
}
