import formatDate from "../utils/formatDate";

const CommentsCard = ({ comment, article }) => {
  return (
    <div className="CommentsCard">
      <h4>{comment.author}</h4>
      <p>Date: {formatDate(article.created_at)}</p>
      <p>{comment.body}</p>
      <p>Votes on Comment: {comment.votes}</p>
    </div>
  );
};

export default CommentsCard;
