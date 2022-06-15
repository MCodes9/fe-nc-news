import { useParams } from "react-router-dom";
import ArticleList from "./ArticleList";

const Topic = () => {
  const { topic_slug } = useParams();

  return (
    <main>
      <ArticleList topic_slug={topic_slug} />
    </main>
  );
};

export default Topic;
