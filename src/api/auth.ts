import { api } from "./axios";

type SignUpResponse = {
  message: string;
  success: boolean;
};

export const signUp = async (
  id: string,
  password: string,
  nickname: string
) => {
  const response: SignUpResponse = await api.post("/register", {
    id: id,
    password: password,
    nickname: nickname,
  });
  return response;
};

export const logIn = async () => {};
