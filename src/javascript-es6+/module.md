# Modules

모듈은 파일을 분리할 수 있고 개발자가 정의하는 런타임 로직 입니다. 재사용 가능한 코드들이나 유틸리티성 혹은 기능이 비슷한 코드들을 한 곳에 모아서 코드를 작성할 수 있습니다.

```js
// ES5
// 함수로직과 출력로직을 한 파일에서 작성을 해야 했다.
function sum(a, b) {
  return a + b;
}

console.log(sum(a, b));

// ES6
// library.js
export const sum = (a, b) => {
  return a + b;
};

// main.js
import { sum } from "./library.js";
console.log(sum);
```
