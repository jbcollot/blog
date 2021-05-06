import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  posts: Post[] = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.posts = this.dataService.posts
  }

}
