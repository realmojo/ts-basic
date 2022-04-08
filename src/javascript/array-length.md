# length 속성

모든 배열에는 `length`속성이 있습니다. 다른 언어들과는 달리 자바스크립트에서 배열의 길이는 상계 기반이 아닙니다. 현재 `length`보다 더 큰 첨자로 항목을 추가하게 되면 `length`의 길이는 늘어 납니다.

`length`속성은 배열의 가장 큰 정수 속성보다 하나 더 큰 값입니다. 왜냐하면 배열은 0부터 시작하기 때문입니다.

```js
let myArray = [];
console.log(myArray.length); // 0

myArray[10000] = true;
console.log(myArray.length); // 10001
```
