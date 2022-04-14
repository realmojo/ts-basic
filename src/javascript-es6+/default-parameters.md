# Default parameters

함수의 매개변수를 전달할 때 값이 없을 경우 기본값을 지정할 수 있습니다.

```js
// ES5
function add(a, b) {
  console.log(a + b);
}
add(1, 2); // 3

// ES6
function add(a = 1, b = 2) {
  console.log(a + b);
}
add(3); // 5
```
