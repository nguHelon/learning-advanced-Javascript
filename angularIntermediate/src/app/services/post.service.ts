import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { postInterface } from '../posts/posts.component';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url: string = 'https://ajsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url)
  }

  createPost<T>(post: postInterface): Observable<T> {
    return this.http.post<T>(this.url, JSON.stringify(post))
  }

  updatePost(post: postInterface) {
    return this.http.patch(`${this.url}/${post.id}`, JSON.stringify(post))
  }

  deletePost(post: postInterface) {
    return this.http.delete(this.url + '/' + post.id).pipe(
      catchError(error => {
        throw `The request threw the error: ${error}`
      })
    )
  }
}
