# ECMAScript 2015(ES6)

## Arrow function

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

## Class

ES5의 자바스크립트에서는 클래스를 구현할 수 없었습니다. 클래스를 구현하기 위해서 `prototype`의 개념을 알아야했고 비슷하게 나마 모듈패턴으로 클래스의 방식을 구현할 수 있었습니다. 하지만 ES6에서는 `class` 문법이 채택되면서 객체지향적 프로그래밍이 가능하게 되었습니다. 클래스는 프로토타입의 상속, 슈퍼호출, 인스턴스 및 정적 메서드, 생성자 등을 지원합니다.

```js
// ES5 Module Pattern
var User = function () {
  var name = "Kim";
  var age = 34;

  return {
    getName() {
      return name;
    },
    getAge() {
      return age;
    },
  };
};
console.log(User().getName()); // Kim

// ES6 Class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}

let user = new User("Kim", 34);
console.log(user.getName()); // Kim
```

### 클래스의 상속

```js
class Human {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Developer extends Human {
  constructor(name, skills) {
    super(name);
    this.skills = skills;
  }
  show() {
    console.log(`My name is ${this.name}. I am familiar with ${this.skills}`);
  }
}

const Damo = new Developer("Damo", "Javascript");
Damo.show(); // My name is Damo. I am familiar with Javascript
```

## Define object

## Copy object

## Default parameters

## for in, for of

## Generator

## Destructing Assignment

## Spread operator

## Modules

## Promise

## Map, Set

## Template literal

## Trailing Commas

## Variable

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
