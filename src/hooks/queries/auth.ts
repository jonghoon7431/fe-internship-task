import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../api/auth";
import { queryKeys } from "../../constants/queryKeys";

export const useGetUserQuery = () => {
  return useQuery({
    queryKey: queryKeys.users.user,
    queryFn: getUser,
  });
};
