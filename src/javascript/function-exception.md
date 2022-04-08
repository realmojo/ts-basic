# 예외

자바스크립트는 예외를 처리할 수 있는 메커니즘을 제공합니다. 예외는 정삭적인 프로그램이 아닌 흐름을 방해나는 비정상적인 사고 입니다. 이러한 사고를 발생하면 프로그램은 예외를 발생 시킵니다.

`throw`문은 함수의 실행을 중단 시킵니다. 개발자가 임의로 예외처리를 하고 싶은 경우 함수 중간에 `throw`구문을 작성하여 예외처리 로직을 만들 수 있습니다.

```js
let sum = function () {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw {
      name: 'TypeError',
      message: 'number needs',
    };
  }
  console.log(a + b);
};

let add = function () {
  try {
    sum('one'); // 숫자가 아닌 문자열을 전달
  } catch (e) {
    console.log(`${e.name}: ${e.message}`); // TypeError: number needs
  }
};

add();
```
