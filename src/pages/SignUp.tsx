import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../api/auth";
import {
  isIdValidate,
  isNicknameValidate,
  isPasswordValidate,
} from "../utils/validate";

const SignUp = () => {
  const [nickName, setNickName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: boolean;
  }>({});

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "nickName") {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: !isNicknameValidate(value),
      }));
    }
    if (name === "id") {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: !isIdValidate(value),
      }));
    }
    if (name === "password") {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: !isPasswordValidate(value),
      }));
    }
    if (name === "passwordCheck") {
      setPasswordCheck(value);
      setValidationErrors((prev) => ({
        ...prev,
        passwordCheck: password !== value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("work");
    e.preventDefault();

    const response = await signUp(id, password, nickName);
    console.log(response);
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
            placeholder="특수문자 제외 10글자 이내로 입력해주세요"
            className="input-auth"
            autoComplete="off"
            minLength={1}
            maxLength={10}
            value={nickName}
            name="nickName"
            onChange={(e) => setNickName(e.target.value)}
            onInput={handleInput}
          />
          {validationErrors.nickName && (
            <p className="text-red-600 text-xs">
              특수문자 제외 1글자 이상 입력해주세요
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="id">아이디</label>
          <input
            id="id"
            type="text"
            placeholder="3글자 이상으로 입력해주세요"
            className="input-auth"
            autoComplete="off"
            minLength={3}
            maxLength={10}
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            onInput={handleInput}
          />
          {validationErrors.id && (
            <p className="text-red-600 text-xs">
              영어와 숫자를 포함해 3글자 이상으로 입력해주세요
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            placeholder="영문, 숫자 혼합 6자 이상으로 입력해주세요"
            className="input-auth"
            autoComplete="new-password"
            minLength={6}
            maxLength={16}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onInput={handleInput}
          />
          {validationErrors.password && (
            <p className="text-red-600 text-xs">
              영문, 숫자 혼합 6자 이상으로 입력해주세요
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="passwordCheck">비밀번호 확인</label>
          <input
            id="passwordCheck"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            className="input-auth"
            autoComplete="new-password"
            minLength={6}
            maxLength={16}
            name="passwordCheck"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            onInput={handleInput}
          />
          {validationErrors.passwordCheck && (
            <p className="text-red-600 text-xs">비밀번호가 일치하지 않습니다</p>
          )}
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
