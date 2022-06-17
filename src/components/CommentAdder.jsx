import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { postComment } from "../utils/api";

const PostComment = ({ setComments }) => {
  const { article_id } = useParams();
  const [newComment, setNewComment] = useState("");
  const { user } = useContext(UserContext);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, newComment, user.username)
      .then((postedComment) => {
        setComments((currComments) => {
          return [postedComment, ...currComments];
        });
      })
      .catch((error) => {
        setError(error.response.data);
      });
    setNewComment("");
  };

  const handleInput = (event) => {
    const { value } = event.target;
    setNewComment(value);
  };

  if (error) {
    return <p> Please try again!</p>;
  }

  if (user.username !== "") {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label>Add a comment</label>
          <input
            type="text"
            name="body"
            value={newComment}
            onChange={handleInput}
            required
          ></input>
          <button> Add a comment!</button>
        </form>
      </>
    );
  } else {
    return <p> Sign in to post a comment</p>;
  }
};

export default PostComment;
