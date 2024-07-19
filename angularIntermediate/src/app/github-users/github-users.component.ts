import { Component, OnInit } from '@angular/core';
import { userInterface, userService } from '../services/github-fetch.service';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.scss']
})
export class GithubUsersComponent implements OnInit {

  githubUsers: userInterface[] = [];

  constructor(private usersService: userService) {}

  ngOnInit(): void {
    this.usersService.fetchGitHubUsers()
      .subscribe({
        next: (data) => this.githubUsers = data,
      })
  }

}
