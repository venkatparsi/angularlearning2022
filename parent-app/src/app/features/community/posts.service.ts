import { Injectable } from '@angular/core';
import  { ArtifactService } from "../../shared/service/artifact.service";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(public artifactService:ArtifactService) { 

  }

   getAllPosts() {
    let result = this.artifactService.getAll('posts');
    return result;
  }

  updatePost(post: any) {
    return this.artifactService.update('posts', post.id, post);
  }

  addPost(post: any) {
    console.log("in add service");
    return this.artifactService.create('posts', post);
  }
}
