import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../api/auth";

const LogIn = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const id = formData.get("id") as string;
    const password = formData.get("password") as string;

    if (!id || !password) {
      return alert("아이디와 비밀번호를 입력해주세요");
    }

    const response = await logIn(id, password);

    if (!response.success) {
      return alert("로그인 실패");
    }
    navigate("/");
  };

  return (
    <div className="container">
      <h1 className="title-text">로그인</h1>

      <form onSubmit={handleSubmit} className="form-section">
        <div className="flex flex-col">
          <label htmlFor="userName">아이디</label>
          <input
            id="id"
            name="id"
            type="text"
            placeholder="아이디를 입력해주세요"
            autoComplete="off"
            className="input-auth"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            autoComplete="new-password"
            className="input-auth"
          />
        </div>

        <div className="flex flex-col gap-3 mt-8">
          <button type="submit" className="button-submit">
            로그인
          </button>
          <Link
            to={"/sign-up"}
            className="button-secondary flex justify-center"
          >
            <button type="button">회원가입 하러 가기</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
