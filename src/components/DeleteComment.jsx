import { useState, useContext } from "react";
import { deleteComment } from "../utils/api";
import { UserContext } from "../context/User";

const DeleteComment = ({ comment, setComments }) => {
  const { user } = useContext(UserContext);
  const [isError, setError] = useState(null);

  const handleClick = () => {
    const deletedCommentId = comment.comment_id;
    deleteComment(deletedCommentId)
      .then(() => {
        alert("Comment deleted");
        setComments((currComments) => {
          let newCommentList = currComments.filter(
            (comment) => comment.comment_id !== deletedCommentId
          );
          return newCommentList;
        });
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  if (isError) {
    return <p>An Error Occured! Please try again later</p>;
  }
  if (user.username !== "" && comment.author === user.username) {
    return (
      <>
        <button onClick={handleClick}>Delete Comment</button>
      </>
    );
  } else if (user.username === "") {
    return <p>Sign-in to delete a comment</p>;
  } else if (comment.author !== user.username) {
    return <p>{comment.author} posted a comment </p>;
  }
};

export default DeleteComment;
