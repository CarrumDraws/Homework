import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { addPost, editPost } from "../store/postSlice/post.slice";

const PostForm = ({ targetPost, setTargetPost }) => {
  let userId = 1;
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (targetPost) {
      setTitle(targetPost.title);
      setBody(targetPost.body);
    } else {
      setTitle("");
      setBody("");
    }
  }, [targetPost]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body) {
      alert("Missing Fields!");
      return;
    }

    if (targetPost) {
      dispatch(
        editPost({
          id: targetPost.id,
          userId,
          title,
          body,
        })
      );
      setTargetPost(null);
    } else dispatch(addPost({ userId, title, body }));

    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">{targetPost ? "Edit Post" : "Add Post"}</button>
      {targetPost && (
        <button
          onClick={() => {
            setTargetPost(null);
          }}
        >
          {"Cancel"}
        </button>
      )}
    </form>
  );
};

export default PostForm;
