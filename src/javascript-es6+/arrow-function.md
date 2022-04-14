# Arrow function

함수를 선언하는 방식이 추가 되었습니다. 화살표 문법을 사용하는 함수 축약형 입니다. `C#`, `Java`, `CoffeeScript`의 관련기능과 구문적으로 유사합니다. 함수와 달리 화살표 함수는 간결하게 사용이 가능하지만 `this`가 사용되는 곳에서는 주의해야 한다. 화살표 함수의 `this`는 상위 객체를 가르키기 때문이다. [[참조](/javascript/function-call.html)]

```js
// 함수 선언식
function add(a, b) {
  return a + b;
}

// 함수 표현식
var sum = function (a, b) {
  return a + b;
};

// 화살표 함수
const sum = (a, b) => {
  return a + b;
};
```
