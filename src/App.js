import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Topic from "./components/Topic";
import CommentList from "./components/CommentList";
import Users from "./components/Users";
import { UserContext } from "./context/UserContext";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleArticle from "./components/SingleArticle";

const App = () => {
  const [user, setUser] = useState({ username: "" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/topics/:topic_slug" element={<Topic />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route
              path="/articles/:article_id/comments"
              element={<CommentList />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
