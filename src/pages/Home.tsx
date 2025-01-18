import React from "react";
import { Link } from "react-router-dom";
// import { usePostQuery, usePostsQuery } from "../hooks/queries/posts";

const Home = () => {
  // const { data: postList } = usePostsQuery();
  // const { data: post } = usePostQuery();
  // console.log(postList, post);

  return (
    <div className="container">
      <h1 className="title-text">한달인턴 사전과제</h1>
      <div className="flex flex-col gap-6 mt-20">
        <Link to={"/sign-up"}>
          <button className="main-button">회원가입</button>
        </Link>
        <Link to={"/log-in"}>
          <button className="main-button">로그인</button>
        </Link>
        <Link to={"/my-page"}>
          <button className="main-button">마이페이지</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
