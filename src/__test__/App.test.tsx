import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
// To Test
import Home from "../pages/Home";

// Tests
describe("Home Component", () => {
  // 1. 렌더링 테스트
  test("페이지 렌더링 테스트", async () => {
    render(<Home />);
    expect(screen.getByText("한달인턴 사전과제")).toBeInTheDocument();
  });

  // 2. 모든 네비게이션 버튼 확인
  test("모든 네비게이션 버튼 존재 확인", () => {
    render(<Home />);
    expect(
      screen.getByRole("button", { name: "회원가입" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "로그인" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "마이페이지" })
    ).toBeInTheDocument();
  });

  // 3. 각 버튼의 링크 경로 확인
  test("buttons have correct navigation links", () => {
    render(<Home />);
    // Link 컴포넌트의 href 속성 확인
    expect(screen.getByRole("link", { name: "회원가입" })).toHaveAttribute(
      "href",
      "/sign-up"
    );
    expect(screen.getByRole("link", { name: "로그인" })).toHaveAttribute(
      "href",
      "/log-in"
    );
    expect(screen.getByRole("link", { name: "마이페이지" })).toHaveAttribute(
      "href",
      "/my-page"
    );
  });

  // 4. 스타일링 클래스 확인
  test("applies correct styling classes", () => {
    render(<Home />);
    // 컨테이너 클래스 확인
    expect(screen.getByText("한달인턴 사전과제").closest("div")).toHaveClass(
      "container"
    );

    // 버튼 스타일링 확인
    const buttons = screen.getAllByRole("button");
    buttons.forEach((button) => {
      expect(button).toHaveClass("main-button");
    });
  });
});
