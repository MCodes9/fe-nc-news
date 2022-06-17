import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getTopics } from "../utils/api";
import { UserContext } from "../context/UserContext";

const Nav = () => {
  const [topics, setTopics] = useState([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <>
      <nav className="nav">
        <Link to="/">home </Link>
        <Link to={`/users`}>users </Link>
        {topics.map((topic) => {
          return (
            <>
              <Link
                to={`/topics/${topic.slug}`}
                id={`${topic.slug}`}
                key={topic.slug}
              >
                {topic.slug}
                {"    "}
              </Link>
            </>
          );
        })}
        <span>Logged in user: {user.username}</span>
      </nav>
    </>
  );
};

export default Nav;
