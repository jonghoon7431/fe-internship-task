import axios from "axios";

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
// api.interceptors.request.use(
//   (config) => {
//     // 토큰이 필요한 경우 헤더에 추가
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // 응답 인터셉터
// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // 401 에러 처리 (인증 실패)
//     if (error.response?.status === 401) {
//       // 로그아웃 처리 또는 토큰 갱신 로직
//     }

//     // 500 에러 처리
//     if (error.response?.status === 500) {
//       // 서버 에러 처리 로직
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;
