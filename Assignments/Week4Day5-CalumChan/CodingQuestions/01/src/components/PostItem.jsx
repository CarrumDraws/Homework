import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../store/postSlice/post.slice";

import { selectPostById } from "../store/postSlice/post.selectors";

const PostItem = ({ id, setTargetPost }) => {
  const { userId, title, body } = useSelector(selectPostById(id));

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(id));
  };

  return (
    <div>
      <hr />
      <h3>{title}</h3>
      <div>{body}</div>
      <button
        onClick={() => {
          setTargetPost({ id, userId, title, body });
        }}
      >
        {"Edit"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PostItem;
