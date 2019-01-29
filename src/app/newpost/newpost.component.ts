import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent {

  @Output() newPostEmitter = new EventEmitter();

  submitForm(body: string, imgsrc: string, subreddit: string) {
    let newPost: Post= new Post (body, imgsrc, subreddit);
    this.newPostEmitter.emit(newPost);
  }

}
