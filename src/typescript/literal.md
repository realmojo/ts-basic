# 리터럴 타입

- 리터럴 타입이란 값에 정확한 값을 지정하는 것을 의미한다. 타입스크립트에서는 string, number, boolean 세 가지 리터럴 타입이 존재한다.

## Literal Narrowing

`var`, `let` 키워드로 변수를 선언 하였을 경우에는 변수안에 데이터 값이 변경할 수 있음을 의미 합니다. `const`로 변수를 선언을 하게되면 변수는 변경되지 않을 것임을 의미 합니다.

```js
// 값을 변경할 수 없습니다.
const str = "Hello, stranger";

// 값을 변경할 수 있습니다.
var str1 = "Hello, stranger";
let str2 = "Hello, stranger";
```
