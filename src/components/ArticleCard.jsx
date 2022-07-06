import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";

const ArticleCard = ({ article }) => {
  return (
    <li key={article.article_id} className="card">
      <Link to={`/articles/${article.article_id}`}>
        <h2>{article.title}</h2>
      </Link>
      <h3>Written by {article.author}</h3>
      <h3> {article.topic}</h3>
      <p>Date: {formatDate(article.created_at)}</p>
      <p>{article.body}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
    </li>
  );
};

export default ArticleCard;
