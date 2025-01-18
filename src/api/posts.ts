//통신 테스트 (json placeholder)

import { testApi } from "./axios";

export const getPosts = async () => {
  const response = await testApi.get("/todos");
  return response.data;
};

export const getPost = async () => {
  const response = await testApi.get("/todos/1");
  return response.data;
};
