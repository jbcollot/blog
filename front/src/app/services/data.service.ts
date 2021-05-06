import { Injectable } from "@angular/core";
import { Post } from '../model/post.model';

@Injectable()
export class DataService {
     posts: Post[] = [{
        title: "bonjour",
        content: "bonjour je m'appelle",
        loveIts: 2,
        created_at: new Date(99,8,7)
     },
    {
        title: "Aurevoir",
        content: "bonjour je m'appelle 2",
        loveIts: -1,
        created_at: new Date(98,3,6)
    }]
}