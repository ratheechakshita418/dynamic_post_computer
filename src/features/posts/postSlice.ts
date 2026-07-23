import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, PostState } from "./postTypes";

const initialState: PostState = {
  currentPost: "",
  posts: [],
};

const postSlice = createSlice({
  name: "posts",

  initialState,

  reducers: {
    // Update the text inside the textarea
    updatePost(state, action: PayloadAction<string>) {
      state.currentPost = action.payload;
    },

    // Save a post
    addPost(state, action: PayloadAction<Post>) {
      state.posts.push(action.payload);
    },

    // Delete a post
    deletePost(state, action: PayloadAction<number>) {
      state.posts = state.posts.filter(
        (post) => post.id !== action.payload
      );
    },

    // Clear textarea
    clearCurrentPost(state) {
      state.currentPost = "";
    },

    // Remove all posts
    clearPosts(state) {
      state.posts = [];
    },
  },
});

export const {
  updatePost,
  addPost,
  deletePost,
  clearCurrentPost,
  clearPosts,
} = postSlice.actions;

export default postSlice.reducer;
