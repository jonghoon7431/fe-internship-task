import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <h1 className="title-text">회원가입</h1>

      <form className="form-section" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="nickName">닉네임</label>
          <input
            id="nickName"
            type="text"
            placeholder="한글 혹은 영어로 입력해주세요"
            className="input-auth"
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="userName">아이디</label>
          <input
            id="userName"
            type="text"
            placeholder="3글자 이상으로 입력해주세요"
            className="input-auth"
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            placeholder="영문, 숫자 혼합 8자 이상으로 입력해주세요"
            className="input-auth"
            autoComplete="new-password"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="passwordCheck">비밀번호 확인</label>
          <input
            id="passwordCheck"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            className="input-auth"
            autoComplete="new-password"
          />
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <button type="submit" className="button-submit">
            회원가입
          </button>
          <Link to={"/log-in"} className="button-secondary flex justify-center">
            <button type="button">로그인 하러 가기</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
