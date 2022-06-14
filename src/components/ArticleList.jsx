import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, []);
  console.log("rendering");

  if (isLoading) return <p>...Loading</p>;

  return (
    <main className="Main">
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <p className="Title">{article.title}</p>
              <p>Author: {article.author}</p>
              <p>Votes: {article.votes}</p>
              <p>Comments: {article.comment_count}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
export default ArticleList;
