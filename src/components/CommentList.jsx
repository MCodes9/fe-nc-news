import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils/api";
import formatDate from "../utils/formatDate";
import CollapseComment from "./CollapseComment";

const CommentList = ({ articleId }) => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(article_id).then((commentsfromApi) => {
      console.log(commentsfromApi);
      setComments(commentsfromApi);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <>...Loading</>;
  }

  return (
    <section>
      <CollapseComment>
        <ul>
          {comments.map((comment) => {
            return (
              <article
                key={comment.comment_id}
                className="pv4 bt bb b--black-10 ph3 ph0-l"
              >
                <h3 className="f5 f4-l lh-copy athelas">{comment.author}</h3>
                <h4 className="f5 f4-l lh-copy athelas">
                  {formatDate(comment.created_at)}
                </h4>
                <p className="f5 f4-l lh-copy athelas">{comment.body}</p>
                <p className="f5 f4-l lh-copy athelas">{comment.votes}</p>
              </article>
            );
          })}
        </ul>
      </CollapseComment>
    </section>
  );
};

export default CommentList;
