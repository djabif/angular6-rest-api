import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

  link: string = 'http://localhost:3000/'

  constructor(
   private http: HttpClient
 ){
 }

 getPost(postId){
   return new Promise((resolve, reject) => {
     this.http.get(this.link + 'posts/' + postId).subscribe(data => {
       // Read the result field from the JSON response.
       resolve(data);
     });
   });
  }

  getComments(postId){
    return new Promise((resolve, reject) => {
      this.http.get(this.link + 'comments?postId=' + postId).subscribe(data => {
        // Read the result field from the JSON response.
        resolve(data);
      });
    });
  }

  makeComment(text, postId){
    var comment = {
      text: text,
      postId: postId
    }
    return new Promise((resolve,reject) => {
      this.http.post(this.link + 'comments', comment).subscribe(data => {
        resolve(comment);
      })
    })
  }

  updateComment(comment, newComment){
    return new Promise((resolve,reject) => {
      this.http.put(this.link + 'comments?id=' + comment.id, newComment).subscribe(data => {
        resolve(newComment);
      })
    })
  }
}
