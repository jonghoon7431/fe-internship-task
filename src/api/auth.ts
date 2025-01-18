import {
  EditProfileResponse,
  GetUserResponse,
  LoginResponse,
  SignUpResponse,
} from "../types/auth";
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

export const getUser = async () => {
  const response: GetUserResponse = await api.get("/user");
  return response;
};

export const editProfile = async (avatar: File, nickname: string) => {
  const response: EditProfileResponse = await api.patch("/profile", {
    avatar: avatar,
    nickname: nickname,
  });
  return response;
};
