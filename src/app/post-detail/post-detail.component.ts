import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'app/post.service';
import { Post } from 'app/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postId: string;
  postToDisplay;

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = urlParameters['id'];
    });
  
  this.postToDisplay = this.postService.getPostById(this.postId);
  }

  clickDelete() {
    this.postService.deletePost(this.postId);
    this.router.navigate(['']);
  }
}
