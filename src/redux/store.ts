import { configureStore } from "@reduxjs/toolkit";
import selectionsReducer from "./rules"

export const store = configureStore({
  reducer: {
    rules: selectionsReducer
  }
})

// infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>
// inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch