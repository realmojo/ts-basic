## let & const

ES5에서 사용하던 var 키워드를 ES6에서는 const, let로 대체합니다.

### 특징

- 재선언, 재할당

`const` - 재선언 재할당 모두 불가능(Array, Object 경우에는 재할당이 가능하다.)

`let` - 재선언 불가능, 재할당 가능

```js
let yourName = "Kim";
const myName = "Sam";

yourName = "Bob";
console.log(yourNameName);

myName = "Tom"; // TypeError: Assignment to constant variable.
console.log(myName);
```

- 이중 선언이 안됌

```js
// ES5
var name = "Kim";
console.log(name); // Kim
var name = "Sam";
console.log(name); // Sam

// ES6
let name = "Kim";
console.log(name); // Kim
let name = "Sam"; // Uncaught SyntaxError: Identifier 'name' has already been declared
console.log(name);
```

- 호이스팅 특성

호이스팅이란 `var`, `function` 등으로 선언을 하면 해당 스코프의 상위로 옮기는 작업을 의미 합니다. 자바스크립트 ES6에서는 `let`, `const`도 호이스팅을 합니다. 하지만 `var`와 달리 `let`으로 선언된 변수는 참조 에러를 발생시킵니다.

```js
console.log(a); // undefined
var a;

console.log(b); // Error: Uncaught ReferenceError: b is not defined
let b;
```

- block scope

`let`, `const` 선언은 블록 스코프(`{}`)의 범위를 가지는 지역 변수 입니다. 선언과 동시에 임의의 값으로 초기화가 가능합니다.

```js
let x = 1;
if (x === 1) {
  let x = 2;
  console.log(x); // 2
}
console.log(x); // 1
```
