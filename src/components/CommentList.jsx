import { useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils/api";
import formatDate from "../utils/formatDate";
import CollapseComment from "./CollapseComment";
import PostComment from "./CommentAdder";
import ErrorPage from "./ErrorPage";

const CommentList = ({ articleId }) => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    getComments(article_id)
      .then((comments) => {
        setComments(comments);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };
  if (error) {
    return <ErrorPage msg={error.msg} status={error.status} />;
  }
  return (
    <section>
      <PostComment setComments={setComments} />
      <CollapseComment>
        <ul>
          {comments.map((comment) => {
            return (
              <article key={comment.comment_id}>
                <h3>{comment.author}</h3>
                <h4>{formatDate(comment.created_at)}</h4>
                <p>{comment.body}</p>
                <p>{comment.votes}</p>
              </article>
            );
          })}
        </ul>
      </CollapseComment>
    </section>
  );
};

export default CommentList;
