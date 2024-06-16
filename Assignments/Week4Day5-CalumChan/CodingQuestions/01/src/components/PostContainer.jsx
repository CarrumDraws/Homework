import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectPosts } from "../store/postSlice/post.selectors";

import PostForm from "./PostForm";
import PostItem from "./PostItem";

const PostContainer = () => {
  let [targetPost, setTargetPost] = useState(null); // Stores the post you are currently editing
  // If null, it means we're not editing anything!

  const posts = useSelector(selectPosts);

  return (
    <>
      <PostForm
        targetPost={targetPost}
        setTargetPost={(post) => setTargetPost(post)}
      />
      <h2>Posts</h2>

      {posts.map((id) => (
        <PostItem
          key={id}
          id={id}
          setTargetPost={(post) => setTargetPost(post)}
        />
      ))}
    </>
  );
};

export default PostContainer;
