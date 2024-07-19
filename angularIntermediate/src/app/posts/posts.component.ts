import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

export interface postInterface {
  id: string
  body: string,
  userId: string,
  title: string,
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any;
  

  constructor(private service: PostService) {}

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value }
    input.value = '';

    this.service.createPost<postInterface>(post)
      .subscribe({
        next: (response) => {
        post['id'] = response.id;
        this.posts.splice(0, 0, post);
        console.log(response);
        },
        error: (error: Response) => {
          alert('An unexpected error occured.');
          console.log(error);
        }
    })
  }

  updatePost(post: postInterface) {
    this.service.updatePost(post)
      .subscribe({
        next: response => {
        console.log(response)
      },
      error: (error) => {
        alert('An unexpected error occured.');
        console.log(error);
      }
    })
  }

  deletePost(post: postInterface) {
    this.service.deletePost(post)
      .subscribe({
        next: response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      error: (error: Response) => {
        if (error.status === 404)
          alert ('This post has already been deleted')
        else {
          alert('An unexpected error occured.');
          console.log(error);
        }
      }
    })
  }

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe({
        next: (data) => this.posts = data,
        error: (error) => {
          alert('An unexpected error occured.');
          console.log(error);
        }
      })
  }

}
