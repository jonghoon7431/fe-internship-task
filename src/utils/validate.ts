const KOREAN_ENGLISH_NUMBER_PATTERN = /^[가-힣a-zA-Z0-9]+$/; //  한글, 영어, 숫자만 허용
const ALLOWED_CHARS_PATTERN = /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>_-]+$/; // 영어, 숫자, 특수문자만 허용

const hasNoSpace = /\s/; // 띄어쓰기 금지
const includeEnglishRegex = /[a-zA-Z]/; //영어가 포함되는지 검사
const includeNumberRegex = /[0-9]/; //숫자 포함되는지 검사

export const isNicknameValidate = (nickName: string) => {
  if (!KOREAN_ENGLISH_NUMBER_PATTERN.test(nickName) || nickName.length < 1) {
    return false;
  }
  if (hasNoSpace.test(nickName)) {
    return false;
  }
  return true;
};
export const isIdValidate = (id: string) => {
  if (!ALLOWED_CHARS_PATTERN.test(id) || id.length < 4) {
    return false;
  }
  if (
    !includeEnglishRegex.test(id) ||
    !includeNumberRegex.test(id) ||
    hasNoSpace.test(id)
  ) {
    return false;
  }
  return true;
};
export const isPasswordValidate = (password: string) => {
  if (!ALLOWED_CHARS_PATTERN.test(password) || password.length < 6) {
    return false;
  }
  if (
    !includeEnglishRegex.test(password) ||
    !includeNumberRegex.test(password) ||
    hasNoSpace.test(password)
  ) {
    return false;
  }
  return true;
};
