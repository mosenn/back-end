"use client";
import { userIsLogin } from "../libs/user/userIsLogin";
import { useQuery } from "react-query";

export const useIsUserLogin = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["users"],
    queryFn: userIsLogin,
  });

  console.log(data, "user is login data in hook");

  return { data };
};
