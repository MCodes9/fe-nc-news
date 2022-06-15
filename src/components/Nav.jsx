import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTopics } from "../utils/api";

const Nav = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <p>...Loading</p>;
  return (
    <nav className="nav-link">
      <Link to="/">Home </Link>
      {topics.map((topic) => {
        return (
          <Link to={`/topics/${topic.slug}`} id={`${topic.slug}`}>
            {topic.slug}{" "}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
