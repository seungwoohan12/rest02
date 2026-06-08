# EVERGUIDE 개발일지

> 프로젝트: EVERGUIDE 공식 웹사이트  
> 리포지토리: https://github.com/seungwoohan12/rest02  
> 기술 스택: React 19 + Vite 9 + CSS Variables  

---

## 2026-06-08 — Day 1 · 프로젝트 초기 설정 및 전체 UI 구현

### 작업 목표
EVERGUIDE IT 전문 개발사 공식 웹사이트의 기반 구조 수립 및 전체 페이지 초안 구현

---

### 환경 구성

| 항목 | 내용 |
|------|------|
| 런타임 | Node.js v24.16.0 |
| 패키지 매니저 | npm v11.13.0 |
| 번들러 | Vite 9.0.7 |
| 프레임워크 | React 19 |
| 추가 라이브러리 | react-router-dom, react-scroll |
| 배포 | GitHub Pages (gh-pages) |

---

### 디자인 시스템 정의

**컬러 팔레트**

| 역할 | 색상명 | HEX |
|------|--------|-----|
| Primary | Royal Blue | `#1a3a6b` |
| Primary Dark | Dark Navy | `#0f2347` |
| Primary Light | Mid Blue | `#2a4f8f` |
| Accent 1 | Dark Red | `#8b1a1a` |
| Accent 2 | Dark Yellow | `#c8960a` |
| Background | Off White | `#f4f6fa` |

CSS 변수(`variables.css`)로 전체 토큰 관리 — 하드코딩 색상 금지  
`global.css`에 공통 버튼, 태그, 유틸리티 클래스 정의

---

### 구현된 컴포넌트

#### Navbar (`src/components/Navbar.jsx`)
- `position: fixed` 고정 네비게이션
- 스크롤 40px 이상 시 배경 `rgba → var(--color-primary-dark)` 전환
- 모바일 900px 이하 햄버거 메뉴 (CSS 애니메이션)
- 각 섹션 smooth scroll 이동

#### Hero Section (`src/pages/Hero.jsx`)
- 풀스크린 히어로 (min-height: 100vh)
- `radial-gradient` + 도트 패턴 배경
- 회사 설립일 배지, 통계 (만족도 100%, 서비스 2개, 24시간 지원)
- 스크롤 힌트 애니메이션 (바운스 효과)

#### Services Section (`src/pages/Services.jsx`)
- 3개 서비스 카드: 프로그램 개발 / 웹 개발 / 기술 지원
- 호버 시 `translateY(-4px)` 리프트 효과

#### Portfolio Section (`src/pages/Portfolio.jsx`)
- 카테고리 필터 (전체 / 웹 개발 / 앱 개발 / 시스템)
- `useState`로 필터 상태 관리
- 6개 프로젝트 카드 (썸네일 + 태그)

#### Team Section (`src/pages/Team.jsx`)
- 팀원 카드 (아바타 이니셜, 역할, 기술 스택)
- 채용 배너 (점선 보더)

#### About Section (`src/pages/About.jsx`)
- 2-컬럼 레이아웃: 회사 설명 + 가치관 카드
- 타임라인 (설립 마일스톤)
- 설립일 강조 블록

#### Contact Section (`src/pages/Contact.jsx`)
- 문의 폼: 이름, 이메일, 회사명, 서비스 선택, 내용
- 제출 성공 시 완료 화면 전환 (페이지 이동 없음)
- 다크 배경 (primary-dark) 위 흰색 폼 카드

#### Footer (`src/components/Footer.jsx`)
- 4-컬럼 그리드: 브랜드 / 서비스 / 회사 / 연락처
- 반응형 (900px → 2열, 600px → 1열)

---

### 파일 구조

```
rest02/
├── index.html                 # 메타태그, lang="ko"
├── vite.config.js
├── package.json
├── DEVLOG.md                  # 이 파일
└── src/
    ├── App.jsx                # 라우트 없는 단일 페이지 조합
    ├── main.jsx
    ├── styles/
    │   ├── variables.css      # 디자인 토큰 (색상, 폰트, 간격)
    │   └── global.css         # 전역 스타일, 유틸리티 클래스
    ├── components/
    │   ├── Navbar.jsx / .css
    │   └── Footer.jsx / .css
    └── pages/
        ├── Hero.jsx / .css
        ├── Services.jsx / .css
        ├── Portfolio.jsx / .css
        ├── Team.jsx / .css
        ├── About.jsx / .css
        └── Contact.jsx / .css
```

---

### 반응형 브레이크포인트

| 브레이크포인트 | 적용 |
|--------------|------|
| ≤ 900px | 네비 → 햄버거, 그리드 → 1~2열 |
| ≤ 600px | 포트폴리오 → 1열, 푸터 → 1열 |

---

### 배포

- **플랫폼:** GitHub Pages  
- **URL:** https://seungwoohan12.github.io/rest02  
- **방식:** `gh-pages` 패키지로 `dist/` → `gh-pages` 브랜치 자동 배포

---

### 다음 개발 예정

- [ ] 실제 프로젝트 이미지/스크린샷 추가
- [ ] 팀원 프로필 사진 추가  
- [ ] 문의 폼 실제 이메일 전송 연동 (EmailJS 또는 서버)
- [ ] 애니메이션 강화 (스크롤 진입 효과 — Intersection Observer)
- [ ] 다국어 지원 (한/영)
- [ ] Google Analytics 연동
