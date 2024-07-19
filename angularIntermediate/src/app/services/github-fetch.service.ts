import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface userInterface {
  avatar_url: string;
  html_url: string;
  login: string;
}

@Injectable({
  providedIn: 'root'
})
export class userService {
  private apiUrl: string = "https://api.github.com/users";

  constructor(private http: HttpClient) { }

  fetchGitHubUsers() {
    return this.http.get<userInterface[]>(this.apiUrl);
  }
}
