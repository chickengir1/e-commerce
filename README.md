# **이커머스 복합 쇼핑몰 프로젝트**

## **프로젝트 개요**

### **1. 주제**
- **복합 쇼핑몰**: 다양한 카테고리의 제품을 판매하고 사용자에게 편리하고 안전한 쇼핑 경험을 제공하는 플랫폼.

---

## **프로젝트 목표**
- **목표**: 
  - 다양한 제품 카테고리를 지원하는 복합 쇼핑몰 구축.
  - 사용자 친화적이며 안전한 쇼핑 경험 제공.
- **주요 기능**:
  - 사용자 인증 및 권한 관리.
  - 제품 검색 및 필터링.
  - 장바구니 및 결제.
  - 관리자 대시보드를 통한 데이터 관리.

---

## **주요 기능**

### 1. **사용자 인증 및 권한 관리**
- OAuth2 기반 소셜 로그인 (Google, Facebook 등).
- 사용자 프로필 관리 (일반 사용자, 판매자, 관리자).

### 2. **제품 관리**
- 제품 CRUD (생성, 조회, 업데이트, 삭제).
- 제품 카테고리 및 재고 관리.

### 3. **검색 및 필터링**
- 키워드 기반 제품 검색.
- 카테고리, 가격, 평점 등 다양한 필터 제공.

### 4. **장바구니 및 결제**
- 장바구니 추가, 삭제, 수정.
- 주문 내역 조회 및 관리.

### 5. **관리자 대시보드**
- 판매자, 주문, 제품 및 사용자 관리.
- 통계 및 데이터 시각화.

---

## **기술 스택**

### **프론트엔드**
- **React.js**: UI 구성.
- **Redux**: 상태 관리.
- **Styled-components**: 컴포넌트 스타일링.

---

## **시스템 아키텍처**

### **아키텍처 개요**
이 프로젝트는 **React.js** 기반의 **클라이언트-서버 구조**로 설계되었으며, 모듈화된 폴더 구조와 주요 기능 중심으로 개발되었습니다. 

---

### **폴더 구조**

```
src/
├── GlobalStyles/         # 전역 스타일 정의
├── components/           # 재사용 가능한 UI 컴포넌트
├── hook/                 # React 커스텀 훅
├── pages/                # 주요 라우트 페이지
├── utils/                # 공통 유틸리티 함수
├── App.jsx               # 애플리케이션 메인 엔트리
├── main.jsx              # ReactDOM 렌더링
└── index.css             # 초기화 및 기본 CSS
```

---

### **주요 아키텍처 구성 요소**
1. **UI 컴포넌트** (`components/`)
   - 재사용 가능한 독립적인 UI 요소(예: 버튼, 카드, 헤더 등)를 관리.

2. **라우팅 및 페이지** (`pages/`)
   - React Router를 기반으로 홈, 제품, 장바구니, 관리자 페이지 등의 주요 라우트를 관리.

3. **비즈니스 로직 분리** (`hook/`)
   - React 커스텀 훅을 통해 데이터 Fetching, 폼 상태 관리, 이벤트 핸들링 등을 처리.

4. **유틸리티** (`utils/`)
   - API 호출, 데이터 처리, 유효성 검사 등 공통 로직 관리.

5. **스타일 관리** (`GlobalStyles/`)
   - 프로젝트 전역에서 사용하는 디자인과 레이아웃 정의.




