import "./App.css";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ArticleList />
    </div>
  );
};

export default App;
