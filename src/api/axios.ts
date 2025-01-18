import axios from "axios";
import { useAuthStore } from "../store/useAuthStore";

export const testApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const API_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    // 토큰이 필요한 경우 헤더에 추가
    const token = useAuthStore.getState().accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// // 응답 인터셉터
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // 401 (인증 실패)
    if (error.response?.status === 401) {
      // 로그아웃 처리 or 토큰 갱신 로직
      useAuthStore().clearAccessToken();
      alert("다시 로그인해주세요, 세션이 만료되었습니다.");
      window.location.href = "/log-in";
    }
    return Promise.reject(error);
  }
);
