import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

const ArticleByTopic = () => {
  const { topic } = useParams();
  const [currentArticles, setCurrentArticles] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getArticles(topic).then((articles) => {
      setCurrentArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <ul>
        {currentArticles.map((article) => {
          return (
            <div key={article.article_id}>
              <ArticleCard article={article} />
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default ArticleByTopic;
