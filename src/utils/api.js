import axios from "axios";

const api = axios.create({
  baseURL: "https://mm-be-nc-news.herokuapp.com/api",
});

export const getTopics = () => {
  return api.get("/topics").then((response) => {
    return response.data.topics;
  });
};

export const getArticles = (topic_slug) => {
  let topicString = `topic=${topic_slug}`;

  if (topic_slug === undefined) topicString = "";
  return api.get(`/articles?${topicString}`).then((response) => {
    return response.data.articles;
  });
};

export const articleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};
