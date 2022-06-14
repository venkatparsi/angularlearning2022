import { Component, OnInit } from '@angular/core';
import { ArtifactService } from 'src/app/shared/service/artifact.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   
   childInfo:any = {
    name: 'Arpit',
    };
   
  constructor(public artifactService: ArtifactService) { 

  }

  ngOnInit(): void {
    console.log("Indata in profile page:",this.childInfo)
    var childrenPromise = this.artifactService.getAll('children');
    childrenPromise.then((result)=> {    
      this.childInfo = [...result.data]
      console.log("Result",this.childInfo)
    })
  }

 
  

}
