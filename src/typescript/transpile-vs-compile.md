# Transpile Vs Compile

트랜스파일과 컴파일 이라는 용어를 많이 헷갈려서 사용을 하는 경우가 많은데 다시 정리해보고자 합니다.

## 트랜스파일

- 트랜스파일이란 `특정 언어로 작성된 소스코드를 동작은 같은 비슷한 소스코드로 변환 하는 작업`을 의미 합니다.

  - `Typescript` -> `Javascript`
  - `Babel` -> `Javascript`

## 컴파일

- 컴파일이란 `특정 언어로 작성된 소스코드를 다른언어로 변환 하는 작업`을 의미 합니다.

  - `C++` -> `C`
  - `C` -> `Assembly`

- 타입스크립트는 트랜스파일인가 컴파일인가? **`둘다 맞다`**
  ::: tip
  [위키피디아](https://en.wikipedia.org/wiki/Source-to-source_compiler) 글을 참고해 보면 트랜스파일은 다음과 같이 정의가 됩니다. A source-to-source translator, source-to-source compiler (S2S compiler), transcompiler, or transpiler. 컴파일러는 트랜스파일의 상위개념이긴 하지만 적절하게 용어를 사용해야 할 것 같다. 하지만 프로그래밍을 개발시에는 크게 중요하지가 않다.
  :::
