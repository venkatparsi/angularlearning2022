import { Component, OnInit, Inject } from '@angular/core';

import {UserService} from "../../shared/service/user.service";
import {User} from "../../shared/model/User";
import { PostsService } from './posts.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  postContent: string;

}

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  posts: any[] =[] ;
  currentUser: User = new User();
  postContent: any;
  showMe:boolean[]=[];
  constructor(public userService: UserService,public postsService:PostsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    let response = this.postsService.getAllPosts();
    response
        .then( (res) => {
          console.log("returned value: ",[...res.data]);
          this.posts = [...res.data];
        })
        .catch(function (err){
          console.log(err);
        });
  }

  toogleTag(id:number){
    this.showMe[id]=!this.showMe[id];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewPostComponent, {
      width: '250px',
      data: {postContent: this.postContent},
    })
    .afterClosed()
    .subscribe(() => this.refreshParent());;
  }
  refreshParent(): void {
    this.currentUser = this.userService.getCurrentUser();
    let response = this.postsService.getAllPosts();
    response
        .then( (res) => {
          console.log("returned value: ",[...res.data]);
          this.posts = [...res.data];
        })
        .catch(function (err){
          console.log(err);
        });
  }

  dislike(post: any):void{
    let postObj = {...post};
    postObj.count_likes--;
    postObj.liked.forEach((value: String, index: any)=>{
      if(value==this.currentUser.id) postObj.liked.splice(index,1);
    });
    let response = this.postsService.updatePost(postObj);
    response
        .then((res) =>{
          post.count_likes--;
          post.liked.forEach((value: String, index: any)=>{
            if(value==this.currentUser.id) post.liked.splice(index,1);
          });
          //post = postObj;
        })
        .catch((err)=>console.log("error in post dislike:", err));
  }

  like(post: any): void{
    console.log("post---", post);
    let postObj = {...post};
    console.log("postObj----", postObj);
    postObj.count_likes++;
    postObj.liked.push(this.currentUser.id);
    let response = this.postsService.updatePost(postObj);
    response
        .then((res:any) =>{
          console.log("Posted successfully.",res)
          post.count_likes++;
          post.liked.push(this.currentUser.id);
        })
        .catch((err:any)=>console.log("error in post like:", err));
  }

  checkLiked(post: any){
    // console.log("in check:",post);
    let liked: Array<String>;
    liked = post.liked;
    return liked.includes(this.currentUser.id);
  }

}

export interface Post {
  name: string;
  updated: Date;
  content: string;
  count_replies: number;
  liked: Array<Number>;
  count_likes:number;
  image: string;
}

@Component({
  selector: 'add-new-post',
  templateUrl: './add-new-post.html',
})
export class AddNewPostComponent implements OnInit{
  
  postObj: Post = {
    name: '',
    updated: new Date,
    content: '',
    count_replies: 0,
    liked: [],
    count_likes: 0,
    image: ''
  };
  currentUser: User = new User();
  constructor(
    public dialogRef: MatDialogRef<AddNewPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public userService: UserService,public postsService:PostsService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onPost(content: string): void{
    //shld add it to the posts obj
    this.postObj.name = "sakila";
    this.postObj.content = content;
    this.postObj.image = "https://material.angular.io/assets/img/examples/shiba1.jpg";

    console.log("calling add postService");
    let response = this.postsService.addPost(this.postObj);
    response
        .then((res:any) =>{
          console.log("Posted successfully.",res)
        })
        .catch((err:any)=>console.log("error in add post:", err));   
    
    this.dialogRef.close();
  }
}