# 한달 인턴 사전 과제

인증/인가 및 테스트 관련 사전 과제 레포입니다. <br/>
백엔드 머니풀 서버에 문제가 있어 통신이 되지 않아, 된다는 가정 하에 코드 작성했습니다. 
- 개발 기간 : 2025/1/17 ~ 2025/1/19 (총 3일)
- 스택 : Vite, React-ts, axios, Zustand, Tanstack-query, Tailwind CSS
- ### 배포 링크 : [Link](https://fe-internship-task.vercel.app/)

 <br/>

## 구현 사항

1. 회원가입 / 로그인 / 마이페이지
2. tailwind를 이용한 스타일링 
3. 권한별 라우팅 제어 
4. zustand, axios를 이용한 인터셉터 및 인증 토큰 관리 
5. axios, tanstack-query를 통한 외부통신 및 전역 state 관리
6. zustand, axios를 이용한 인터셉터 및 인증 토큰 관리 

Jest(Cypress)를 이용한 테스트, Sentry 도입 및 로그 확인 은 구현하지 못했습니다.

### 구현 상세

- tailwind.config.ts : 스타일 클래스 재사용을 위해 플러그인을 따로 작성하여 사용했습니다.
- ProtectedRoute.tsx 파일을 제작하여 zustand 스토어에 access token이 없을 경우 로그인 페이지로 유도하도록, 레이아웃에 위치 시켰습니다.
- api/axios.ts : axios를 사용해 기본 url을 지정하고, 요청 응답 인터셉터를 사용해 토큰이 필요한 경우에만 헤더에 추가하도록 구현했습니다.
- constasts/queryKeys.ts : 쿼리키는 constasts 폴더 내에서 관리합니다.
- api/auth.ts | hooks/queries : axios와 react-query를 활용해 백엔드 통신 로직 작성했습니다.

<br/>

## 아쉬운 점 회고

- jest를 통한 테스트, Sentry 도입은 구현에 실패하였습니다. (추후 학습 필요)
- 404 페이지 제작이나 로딩 처리를 하지 못했습니다.
- 파일 구조 설계에 대한 고민과 이해가 더 필요할 것 같습니다.

<br/>
<br/>
<hr/>
<br/>

## Installation

1. 먼저, 저장소를 클론합니다:
   ```bash
   git clone https://github.com/username/repository.git
2. 클론한 디렉토리로 이동합니다:
   ```bash
   cd repository
3. 필요한 패키지를 설치합니다:
   ```bash
   yarn install
4. 애플리케이션을 실행합니다:
   ```bash
   yarn dev

### 백엔드 서버 url은 env.local에 따로 저장하였으며, 공개하지 않습니다. 따라서 api는 정상 작동 하지 않습니다


