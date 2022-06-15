import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Topic from "./components/Topic";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics/:topic_slug" element={<Topic />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
