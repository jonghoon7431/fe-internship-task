import React, { useState } from "react";
import EditPage from "../components/myPage/EditPage";
import MyPageContent from "../components/myPage/MyPageContent";
import { useGetUserQuery } from "../hooks/queries/auth";

const MyPage = () => {
  const { data } = useGetUserQuery();

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="container">
      <div className="w-full flex items-center justify-between">
        <div className="w-[3rem]">{}</div>
        <h1 className="title-text">{data?.nickname}님의 페이지</h1>
        <button
          onClick={() => setIsEdit(!isEdit)}
          className="border-[1px] border-gray-500 px-2 py-1 rounded text-sm"
        >
          {isEdit ? "완료" : "수정"}
        </button>
      </div>

      {isEdit ? (
        <EditPage nickName={data?.nickname} />
      ) : (
        <MyPageContent nickName={data?.nickname} avatar={data?.avatar} />
      )}
    </div>
  );
};

export default MyPage;
