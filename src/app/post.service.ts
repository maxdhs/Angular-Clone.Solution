import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Post } from 'app/post.model';
import { database } from 'firebase';

@Injectable()
export class PostService {

  post: Post;
  postId: string;

  posts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.posts = database.list('posts');
  }

  getPosts() {
    return this.posts;
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
  }

  getPostById(postId: string) {
    return this.database.object('posts/' + postId);
  }

  deletePost(postId: string) {
    this.database.object('posts/' + postId).remove();
  }

}
