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

export const votePatch = (article_id, inc_votes) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes })
    .then((response) => {
      return response.data.article;
    });
};

export const getComments = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const getUsers = () => {
  return api.get("/users").then((response) => {
    return response.data.users;
  });
};

export const postComment = (article_id, newComment, username) => {
  return api
    .post(`/articles/${article_id}/comments`, {
      username: username,
      body: newComment,
    })
    .then((response) => {
      return response.data.newAddedComment;
    });
};

export function deleteCmment(comment_id) {
  return api.delete(`/comments/${comment_id}`);
}
