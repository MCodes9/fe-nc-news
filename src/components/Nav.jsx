import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTopics } from "../utils/api";

const Nav = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <>
      <nav className="nav">
        <Link to="/">home</Link>
        {topics.map((topic) => {
          return (
            <Link
              to={`/topics/${topic.slug}`}
              id={`${topic.slug}`}
              key={topic.slug}
            >
              {topic.slug}
              {"    "}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Nav;
