import { configureStore } from "@reduxjs/toolkit";

import postReducer from "../features/posts/postSlice";
import platformReducer from "../features/platforms/platformSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    platforms: platformReducer,
  },
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
