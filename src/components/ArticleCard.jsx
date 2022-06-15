import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";

const ArticleCard = (article) => {
  return (
    <article className="ArticleCard__article">
      <Link to={`/articles/${article.article_id}`}>
        <h3>{article.title}</h3>
      </Link>
      <p>Author: {article.author}</p>
      <p>Date: {formatDate(article.created_at)}</p>
      <p>Topic: {article.topic}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
    </article>
  );
};

export default ArticleCard;
