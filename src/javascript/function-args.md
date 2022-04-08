# 인수 배열

함수를 호출할 때 추가적인 매개변수로 `arguments`라는 배열을 사용합니다. 이 배열은 함수를 호출할 때 전달된 모든 인수를 접근할 수 있습니다. 여기에는 매개변수보다 더 많이 전달된 인수들도 포함합니다. `arguments`는 넘어오는 매개변수의 개수를 정확하게 정하지 않고 사용할 때 동작하는 함수를 만들 수 있습니다.

```js
let add = function () {
  let sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
};
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55
```

하지만 이와 같은 방식의 코딩은 개발자로 하여금 좋은 코드가 아닙니다. 아래의 예제와 같이 정확하게 매개변수가 몇 개 넘어오는지 작성해주는 것이 좋습니다.

```js
let add = function (number) {
  let sum = 0;
  for (i = 0; i < number.length; i++) {
    sum += number[i];
  }
  console.log(sum);
};
add([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 55
```
