import React, { useState } from "react";
import { editProfile } from "../../api/auth";
import { EditProfileResponse } from "../../types/auth";

interface Props {
  nickName: string | undefined;
}

const EditPage = ({ nickName }: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [nickNameState, setNickNameState] = useState(nickName || "");

  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      return;
    }
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) {
      return setUploadStatus("파일을 선택해주세요");
    }
    if (nickNameState === "") {
      return setUploadStatus("닉네임을 입력해주세요");
    }

    try {
      const response: EditProfileResponse = await editProfile(
        file,
        nickNameState
      );
      setUploadStatus(`${response.message}`);
    } catch (error) {
      setUploadStatus("프로필 업데이트 실패");
    }
  };

  return (
    <div className="flex flex-col w-[70%] items-center gap-4 mt-2 p-4">
      <label htmlFor="avatar" className="cursor-pointer">
        프로필 이미지 업로드
      </label>
      {preview ? (
        <div className="relative bg-slate-400 w-[200px] h-[200px]">
          <img src={preview} className="w-[200px] h-[200px]" />
          <div
            className="absolute top-0 right-0 bg-white cursor-pointer px-2 py-1"
            onClick={() => {
              setFile(null);
              setPreview(null);
            }}
          >
            x
          </div>
        </div>
      ) : (
        <div className="w-[200px] h-[200px] bg-gray-500 flex justify-center items-center">
          미리보기
        </div>
      )}
      <input
        type="file"
        accept="image/png, image/jpeg"
        name="avatar"
        id="avatar"
        onChange={handleFileChange}
        className="cursor-pointer w-[70%] flex"
      />

      <div className="w-[70%] flex gap-4 items-center justify-around">
        <label htmlFor="nickName">닉네임</label>
        <input
          type="text"
          name="nickName"
          id="nickName"
          className="input-auth"
          value={nickNameState}
          onChange={(e) => setNickNameState(e.target.value)}
        />
      </div>

      <button
        type="button"
        onClick={handleUpload}
        className="button-submit w-[16rem]"
      >
        업로드
      </button>
      {uploadStatus && <p className="text-red-600">{uploadStatus}</p>}
    </div>
  );
};

export default EditPage;
