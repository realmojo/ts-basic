# 유효범위

프로그래밍 언어에서 유효범위는 변수와 매개변수의 접근성과 생존 기간을 제어 합니다. 유효범위는 이름들이 충돌하는 문제를 덜어주고 자동으로 메모리를 관리하기 때문에 개발자에게는 중요한 개념입니다.

이전에 자바스크립트에서는 블록 유효범위가 존재하지 않았습니다. 함수 유효범위만 있었습니다. 즉 아래의 예제처럼 `if`구문의 블록은 유효범위가 존재하지 않아 블록안에서 선언안 `b`변수를 블록 밖에서도 접근이 가능하였습니다.

기존 방식

```js
var a = 4;
if (a > 3) {
  var b = a * 2;
  console.log(b); // 8
}
console.log(b); // 8
```

하지만 ES6가 도입되면서 `let`키워드를 이용하여 블록 유효범위가 도입되었습니다. 해당 블록 `{}` 안에서만 값이 유효하게 됩니다. 적절하게 논리적인 로직에 따라 유효범위를 사용하시면 됩니다.

현재 방식

```js
let a = 4;
if (a > 3) {
  let b = a * 2;
  console.log(b); // 8
}
console.log(b); // Uncaught ReferenceError: b is not defined
```
