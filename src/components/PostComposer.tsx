import "../styles/PostComposer.css";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

import { updatePost } from "../features/posts/postSlice";

const PostComposer = () => {
  const dispatch = useAppDispatch();

  const post = useAppSelector(
    (state) => state.posts.currentPost
  );

  return (
    <div className="post-composer">
      <h2>Compose Your Post</h2>

      <textarea
        placeholder="Write your social media post here..."
        value={post}
        onChange={(e) => dispatch(updatePost(e.target.value))}
      />
    </div>
  );
};

export default PostComposer;
