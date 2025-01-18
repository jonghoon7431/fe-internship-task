import { useQuery } from "@tanstack/react-query";
import { getPost, getPosts } from "../../api/posts";
import { queryKeys } from "../../constants/queryKeys";

//리스트
export const usePostsQuery = () => {
  return useQuery({
    queryKey: queryKeys.posts.all,
    queryFn: getPosts,
  });
};
//단건
export const usePostQuery = () => {
  return useQuery({
    queryKey: queryKeys.posts.detail("1"),
    queryFn: getPost,
  });
};
