# 에그라우터 통합 명세

이 폴더는 관리자 시스템과 Telegram Mini App 쇼핑몰의 개발 기준을 **두 개의 명세**로만 관리한다.

## 현재 기준 산출물

| 구분 | 개발명세 | HTML 프리뷰 |
|---|---|---|
| 통합 관리자 | [ADMIN_SPEC.md](./ADMIN_SPEC.md) | [legacy-admin-preview/index.html](../legacy-admin-preview/index.html) |
| Telegram Mini App 쇼핑몰 | [STOREFRONT_SPEC.md](./STOREFRONT_SPEC.md) | [html-preview/index.html](../html-preview/index.html) |

공통 버전은 [VERSION.md](./VERSION.md), 모든 변경 기록은 [CHANGELOG.md](./CHANGELOG.md) 한 곳에서 관리한다.

## 문서 역할

### ADMIN_SPEC.md

- 대리점 → 판매점 → 영업점 조직과 권한
- 기존 관리자 기반 메뉴·검색·목록·모달 UI
- 신규주문, 재고, 개통, 충전, 판매, 정산, 코드, 감사로그
- 판매점·영업점 쇼핑몰 관리 메뉴와 공통 API 연계
- 데이터, API, 보안, 테스트 및 미확정 정책

### STOREFRONT_SPEC.md

- 판매점·영업점별 선택형 Telegram Mini App
- 고객계정, 상품, 주문, 결제, 리뷰, 배너
- 고객과 신규주문 수동 매칭, 나의 장비, 충전 자동접수
- 초보 고객용 메인·서브페이지와 선택형 템플릿
- 관리자와 쇼핑몰 사이의 연동 계약

## 최소 버전 관리 규칙

- 명세 버전: `MAJOR.MINOR.PATCH-draft`
- 프리뷰 버전: 같은 명세 버전에 `-preview.N`
- 정책이나 기능이 바뀌면 두 명세 중 영향받는 문서만 수정한다.
- 화면이 바뀌면 대응하는 HTML 프리뷰도 함께 수정한다.
- 변경 내용은 `CHANGELOG.md`에 한 번만 기록한다.
- `VERSION.md`의 네 산출물 버전을 같은 작업에서 갱신한다.
- 확정되지 않은 내용은 별도 문서로 만들지 않고 해당 명세의 `미확정 사항`에 기록한다.

## 과거 자료

`archive` 폴더는 기존 세부 명세와 의사결정 기록을 보존하는 참고자료다. 새 요구사항은 이 파일들에 추가하지 않는다. 기존 관리자 분석 원문과 엑셀 요구사항 관리대장도 근거자료일 뿐 현재 개발 기준은 위 두 명세다.

## 변경 작업 순서

1. 요구사항이 관리자 업무인지 쇼핑몰 고객 화면인지 구분한다.
2. `ADMIN_SPEC.md` 또는 `STOREFRONT_SPEC.md`를 수정한다.
3. 대응하는 HTML 프리뷰를 수정한다.
4. `VERSION.md`와 `CHANGELOG.md`를 갱신한다.
5. 브라우저 검수 후 Git 커밋을 생성한다.
