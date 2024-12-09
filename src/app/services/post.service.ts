import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    new Post(1, 'Premier post', 'Contenu du premier post'),
    new Post(2, 'Deuxième post', 'Contenu du deuxième post'),
    new Post(3, 'Troisième post', 'Contenu du troisième post'),
    new Post(4, 'Quatrième post', 'Contenu du quatrième post')
  ];

  constructor() { }
  getPosts(): Post[] {
    return this.posts;
}
getPostById(id: number): Post | undefined {
  return this.posts.find(post => post._id === id);
}

createPost(titre: string, content: string): Post {
  const newPost = new Post(this.posts.length + 1, titre, content);
  this.posts.push(newPost);
  return newPost;
}

updatePost(id: number, titre: string, contenu: string): Post | undefined {
  const post = this.getPostById(id);
  if (post) {
    post.titre = titre;
    post.contenu = contenu;
    return post;
  }
  return undefined;
}

deletePost(id: number): boolean {
  const index = this.posts.findIndex(post => post._id === id);
  if (index !== -1) {
    this.posts.splice(index, 1);
    return true;
  }
  return false;
}
}