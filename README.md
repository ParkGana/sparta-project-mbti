# MBTI 테스트

<br />

내일배움캠프 React 7기 과정에서 진행한 개인 프로젝트이다.

https://sparta-project-mbti.vercel.app/

### 프로젝트 목표

-   회원가입 및 로그인, 프로필 관리, 테스트 결과 저장 등 실무에서 자주 사용되는 기능 구현

-   인증 및 권한 관리를 통해 사용자의 데이터를 안전하게 보호

-   json-server를 이용해서 로컬 환경에서 API 서버 구축

-   Axios와 TanStack Query를 이용해서 비동기 데이터를 효율적으로 관리

<br />

---

<br />

### 프로젝트 설정

-   <b>Vite로 프로젝트 생성</b> : yarn create vite . --template react

-   <b>react-router-dom</b> : yarn add react-router-dom

-   <b>tailwind css</b> : yarn add tailwindcss postcss autoprefixer / npx tailwindcss init -p

-   <b>tanstack query</b> : yarn add axios json-server @tanstack/react-query

-   <b>sweetalert</b> : yarn add sweetalert2

<br />

---

<br />

### 프로젝트 내 컴포넌트

-   <b>Header</b> : 헤더 (모든 페이지에 공통적으로 적용되는 레이아웃)

-   <b>Button</b> : 버튼 (필요에 맞게 조건부 스타일링)

-   <b>AuthForm</b> : 회원가입, 로그인, 프로필 수정을 위한 Form

-   <b>TestForm</b> : MBTI 테스트를 위한 Form

<br />

---

<br />

### 구현한 기능

-   #### 회원가입 및 로그인

    -   JWT 테스트 API(https://moneyfulpublicpolicy.co.kr) 이용

-   #### 프로필 수정

    -   닉네임 변경하기

-   #### MBTI 테스트

    -   총 20개의 항목으로 구성된 테스트 수행하기

    -   모든 항목에 답을 해야 결과 확인 가능

-   #### MBTI 테스트 결과 확인

    -   사이트를 이용하는 모든 사용자들의 테스트 결과 확인하기

    -   테스트 결과 공개/비공개 설정하기

    -   테스트 결과 삭제하기

<br />

---
