import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    public homeService: HomeService
  ) { }

  ngOnInit() {
    this.homeService.getPosts()
    .then(res => {
      this.posts = res;
    })
  }

  viewMore(postId){
    this.router.navigate(['/post/' + postId]);
  }

}
