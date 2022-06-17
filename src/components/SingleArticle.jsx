import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { articleById } from "../utils/api";
import formatDate from "../utils/formatDate";
import CommentList from "./CommentList";
import ErrorPage from "./ErrorPage";
import Vote from "./Vote";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
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
    return <p> ... Loading</p>;
  }

  if (error) {
    return <ErrorPage msg={error.msg} status={error.status} />;
  }

  return (
    <section className="article">
      <ul>
        <article key={article.article_id}>
          <h3>{article.title}</h3>
          <h4> {article.topic}</h4>
          <h5>Author: {article.author}</h5>
          <p>Date: {formatDate(article.created_at)}</p>
          <p>{article.body}</p>
          <Vote articleId={article.article_id} votes={article.votes} />
          <p>Comments: {article.comment_count}</p>
          <CommentList />
        </article>
      </ul>
    </section>
  );
};

export default SingleArticle;
