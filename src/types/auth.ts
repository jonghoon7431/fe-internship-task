export type SignUpResponse = {
  message: string;
  success: boolean;
};
export type LoginResponse = {
  accessToken: string;
  userId: string;
  success: boolean;
  avatar: string | null;
  nickname: string;
};
export type GetUserResponse = {
  id: string;
  nickname: string;
  avatar: string | null;
  success: boolean;
};
