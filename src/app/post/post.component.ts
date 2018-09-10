import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: any = {
    "title": "",
    "description": "",
    "author": "",
    "image": "",
  };

  comments: any = [];
  comment: string = '';

  constructor(
    private route: ActivatedRoute,
    public postService: PostService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      var postId = params.id;
      this.postService.getPost(postId)
      .then( res => {
        this.post = res;
      })
      this.postService.getComments(postId)
      .then( res => {
        this.comments = res;
      })
    })
  }

  sendComment(){
    this.postService.makeComment(this.comment, this.post.id)
    .then( res => {
      this.comments.push(res);
    })
  }


}
