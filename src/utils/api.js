import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://mm-be-nc-news.herokuapp.com/api",
});

export const getArticles = (articles) => {
  return articlesApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};
