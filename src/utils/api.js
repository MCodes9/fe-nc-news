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
  console.log(topic_slug, "topic slug API call");
  let topicString = `topic=${topic_slug}`;
  console.log(topicString, "topic string");
  if (topic_slug === undefined) topicString = "";
  return api.get(`/articles?${topicString}`).then((response) => {
    return response.data.articles;
  });
};
