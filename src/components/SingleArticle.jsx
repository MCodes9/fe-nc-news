import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { articleById } from "../utils/api";
import formatDate from "../utils/formatDate";
import ErrorPage from "./ErrorPage";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    articleById(article_id)
      .then((singleArticleFromApi) => {
        setArticle(singleArticleFromApi);
        setIsLoading(false);
        setError(null);
      })
      .catch(
        ({
          response: {
            data: { msg },
            status,
          },
        }) => {
          setError({ msg, status });
          setIsLoading(false);
        }
      );
  }, [article_id]);

  if (isLoading) {
    return <p> ...Still Loading</p>;
  }

  if (error) {
    return <ErrorPage msg={error.msg} status={error.status} />;
  }

  return (
    <div className="ArticleCard  ">
      <h3>{article.title}</h3>
      <p>Author: {article.author}</p>
      <p>Date: {formatDate(article.created_at)}</p>
      <p>{article.body}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
    </div>
  );
};

export default SingleArticle;
