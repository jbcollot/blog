import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post.model';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: Post = {
    title: "",
    content: "",
    loveIts: 0,
    created_at: new Date(0,0,0)
  }

  constructor() { }

  ngOnInit(): void {
  }

  like(){
    this.post.loveIts += 1;
  }

  dislike(){
    this.post.loveIts -= 1;
  }

}
