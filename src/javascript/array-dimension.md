# 배열의 크기와 차원

자바스크립트의 배열은 기본적으로 초기화되지 않습니다. 만약 새로운 배열을 `[]`로 만들게 되면 배열은 비어있게 됩니다. 그리고 존재하지 않는 요소를 접근하게 되면 `undefined`를 출력합니다.

간단하게 배열의 크기와 초기값을 지정하는 메소드를 정의해보겠습니다.

```js
Array.init = function (size, initValue) {
  let a = [],
    i;
  for (i = 0; i < size; i += 1) {
    a[i] = initValue;
  }
  return a;
};

// 10개의 초기값 0을 가지는 배열 생성
let myArray = Array.init(10, 0);
console.log(myArray); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```

자바스크립트에서는 다차원 배열이 없지만 대부분 C언어 유형처럼 다음과 같이 배열안에 배열을 사용할 수 있습니다.

```js
let matrix = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
console.log(matrix[2][1]); // 7
```
