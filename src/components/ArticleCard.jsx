import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";

const ArticleCard = ({ article }) => {
  return (
    <li key={article.article_id} className="card">
      <Link to={`/articles/${article.article_id}`}>
        <h3>{article.title}</h3>
      </Link>
      <h4>Written by {article.author}</h4>
      <h5> {article.topic}</h5>
      <p>Date: {formatDate(article.created_at)}</p>
      <p>{article.body}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
    </li>
  );
};

export default ArticleCard;
