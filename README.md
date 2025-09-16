# 🚀 LinkUp - 아이돌 캘린더 서비스

## 📦 설치
### 1. 사전 요구 사항
MacOs
```bash
brew install node
```

### 2. 프로젝트 설치
```bash
git clone -b develop https://github.com/Oz12-mainproject-6/oz_main_linkup_front
cd oz_main_linkup_front
npm install
npm run dev
```

### 3. 프로젝트 실행
주소창에 http://localhost:5173

## 라우트
```
/test           -- health api 페이지 (미구현)
/test/thepott   -- 하흥주 실험 페이지
/test/paul      -- 이원희 작업 페이지
/test/heehaa    -- 최나희 작업 페이지
/rest/mijin     -- 김미진 작업 페이지

/               -- 프론트페이지(구독 있으면 전체 콘텐트, 없으면 추천 콘텐트, 검색 쿼리 있으면 검색 콘텐트 출력)
/login          -- 로그인 페이지 (미구현)
/signup         -- 회원가입 페이지 (미구현)
/detail/:artistId       -- 아티스트 세부 페이지 (미구현)
/mypage         -- 마이페이지
/mypage/write   -- 팬 포스트 작성 페이지 (미구현)
/agency         -- 소속사 페이지
```
