import { Component } from '@angular/core';
import { Post } from './post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){}

  posts: Post[] = [

  ]

  addPost(event){
   this.posts.push(event);
  }
}