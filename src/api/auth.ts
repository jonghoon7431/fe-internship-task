import { LoginResponse, SignUpResponse } from "../types/auth";
import { api } from "./axios";

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

export const logIn = async (id: string, password: string) => {
  const response: LoginResponse = await api.post("/login?expiresIn=10m", {
    id: id,
    password: password,
  });
  return response;
};
