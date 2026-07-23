import { RootState } from "../../app/store";

export const selectCurrentPost = (state: RootState) =>
  state.posts.currentPost;

export const selectAllPosts = (state: RootState) =>
  state.posts.posts;
