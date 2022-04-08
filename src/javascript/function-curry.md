# 커링(Curry)

함수는 값(value)이며 이 함수값을 새로운 방법으로 다룰 수 있습니다. 커링은 함수와 인수를 결합하여 새로운 함수를 만들 수 있게 합니다.

```js
let add1 = add.curry(3);
console.log(add1(2));
```

`add1`은 `add`의 `curry` 메소드에 1을 넘겨서 생성한 함수입니다. `add1` 함수는 자신의 인수에 1을 더합니다. 자바스크립트는 `curry` 메소드가 없지만 다음과 같이 `Function.prototype`에 추가가 가능합니다.

```js
Function.prototype.curry = function () {
  let slice = Array.prototype.slice;
  let args = slice.apply(arguments);
  let that = this;
  return function () {
    return that.apply(null, args.concat(slice.apply(arguments)));
  };
};

function add(a, b) {
  return a + b;
}

let add1 = add.curry(1);
console.log(add1(5)); // 6
```
