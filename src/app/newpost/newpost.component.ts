import { Component, OnInit } from '@angular/core';
import { Post } from 'app/post.model';
import { PostService } from 'app/post.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  newPost: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  submitPost(body: string, subreddit: string, imgsrc: string) {

    let newPost = new Post(body, subreddit, imgsrc);
    this.postService.addPost(newPost);

  }

}
