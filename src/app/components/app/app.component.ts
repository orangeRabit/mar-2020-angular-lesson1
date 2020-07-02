import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../models/Post';
import {Comment} from '../models/Comment';

@Component({
  selector: 'app-xxx',
  templateUrl: `./app.component.html`,
  styleUrls: [`app.component.css`]
})
export class AppComponent {
  // private http: HttpClient;
  // constructor(http: HttpClient) {
  //   this.http = http;
  // }

  users: any[];
  posts: Post[];
  comments: Comment[];

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<any[]>('http://jsonplaceholder.typicode.com/users')
      .subscribe(response => this.users = response);

    this.httpClient
      .get<any[]>('http://jsonplaceholder.typicode.com/posts')
      .subscribe(response => this.posts = response.slice(5, 25));

    this.httpClient
      .get<any[]>('http://jsonplaceholder.typicode.com/comments')
      .subscribe(response => this.comments = response.slice(5, 25));
  }

}
