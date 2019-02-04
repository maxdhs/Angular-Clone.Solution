import { Component, OnInit } from '@angular/core';
import { PostService } from 'app/post.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Post } from 'app/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  currentRoute: string = this.router.url;
  posts: FirebaseListObservable<any[]>;

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.$key]);
  }

}
