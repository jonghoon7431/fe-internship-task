import React from "react";

interface Props {
  nickName: string | undefined;
  avatar: string | undefined | null;
}
const MyPageContent = ({ nickName, avatar }: Props) => {
  return (
    <div className="flex flex-col w-[70%] items-center gap-4 mt-12 p-4">
      {avatar ? (
        <img src={avatar} className="w-[200px] h-[200px]" />
      ) : (
        <div className="bg-slate-400 w-[200px] h-[200px] flex justify-center items-center">
          프로필 이미지 없음
        </div>
      )}

      <div>닉네임 : {nickName}</div>
    </div>
  );
};

export default MyPageContent;
