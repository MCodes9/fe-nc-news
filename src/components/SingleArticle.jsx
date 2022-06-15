import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { articleById } from "../utils/api";
import formatDate from "../utils/formatDate";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    articleById(article_id).then((singleArticleFromApi) => {
      setArticle(singleArticleFromApi);
      console.log("article", article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p> ...Still Loading</p>;
  }

  return (
    <div className="ArticleCard">
      <h3>{article.title}</h3>
      <p>Author: {article.author}</p>
      <p>Date: {formatDate(article.created_at)}</p>
      <p>Topic: {article.topic}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
    </div>
  );
};

export default SingleArticle;
