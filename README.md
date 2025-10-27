# javascript-racingcar-precourse
# 2주차 - 문자열 덧셈 계산기

## ⚙️ 간단한 프로젝트 실행 흐름
1. 안내 문구를 출력한다.
2. 자동차 이름을 입력 받는다.
3. 시도 횟수를 입력 받는다.
4. 입력 문자열을 parser로 분리하고 변환하다.
5. validator로 이름과 횟수를 검증한다.
6. 경주 시뮬레이션을 수행하고 차수별 결과를 출력한다.
7. 최종 우승자(동점 허용)를 계산하여 출력한다.
8. 잘못된 입력 시 [ERROR]로 시작하는 메시지와 함께 Error를 던지고 종료한다.

## 🔧 구현할 기능 목록

### 1. util 
- parser (문자열 -> 자료형 변환)
    - [ ] splitNames - 문자열을 쉼표(,)로 분리하고 trim() 적용
    - [ ] toInteger - 문자열을 정수로 변환
- validator (입력 규칙 검증)
    - [ ] validateNames - 이름 유효성 검증
    - [ ] validateCount - 시도 횟수 검증

### 2. domain
- [ ] Car 클래스 생성
- [ ] Race 클래스 생성

### 3. service
- [ ] GameService 구현

### 4. io (input/output)
- InputView
    - [ ] readCarNames - 이름 입력받기
    - [ ] readTryCount - 시도 횟수 입력받기
- OutputView 
    - [ ] printEcecutionHeader - "실행 결과" 출력
    - [ ] printRound - 각 차수 결과 출력
    - [ ] printWinners - 우승자 출력

### 1. App.js (입출력과 전체 흐름 제어)
- [ ] 모든 모듈 연동
- [ ] App.run() 실행 로직 완성
- [ ] `ApplicationTest.js` 테스트 확인