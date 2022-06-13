import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

const ArticleList = () => {
  const [articles, setArticles] = useState([
    {
      author: "grumpy19",
      title: "The Notorious MSG’s Unlikely Formula For Success",
      article_id: 34,
      topic: "cooking",
      created_at: "2020-11-22T11:13:00.000Z",
      votes: 0,
      comment_count: 11,
    },
  ]);
  //   const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      console.log("articlesFromApi", articlesFromApi);
      setArticles(articlesFromApi);
    });
  }, []);
  console.log("rendering");

  //   if (isLoading) return <p>...Loading</p>;

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
