export interface Post {
  id: number;
  content: string;
  platforms: string[];
}

export interface PostState {
  currentPost: string;
  posts: Post[];
}
