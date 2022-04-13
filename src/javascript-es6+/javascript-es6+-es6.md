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

## Enhanced Object Literals

### Concise Method

객체에서 메소드를 간결하게 작성하는 것을 의미합니다. `function` 키워드를 작성하지 않아도 됩니다.

```js
// ES5
var user = {
  name: "Kim",
  getName: function () {
    return this.name;
  },
};

// ES6
let user = {
  name: "Kim",
  getName() {
    return this.name;
  },
};
```

### Shorthand Property

변수를 속성값으로 사용시 속성값을 축약할 수 있습니다.

```js
// ES5
var name = "Kim";
var age = 34;
var user = {
  name: name,
  age: age,
};

// ES6
let name = "Kim";
let age = 34;
const user = {
  name,
  age,
};
```

### Computed property

표현식을 이용하여 객체의 키를 동적으로 생성하는 문법입니다. 기존에는 아래와 같은 문법을 적용할 수 없었습니다.

```js
var name = "Kim";
var obj = {
  'my_' + name: "Sam", // Unexpected token '+'
  `my_${name}`: "Sam", // Unexpected template string
}

// ES6
let name = "Kim";
let obj = {
  [`my_${name}`]: "Kim",
};
console.log(obj); // { my_Kim: 'Kim' }

let funcName = "getName";
let name = "Kim";
let obj = {
  [`my_${name}`]: "Kim Hi",
  [funcName]() {
    console.log(this.my_Kim);
  },
};
obj.getName(); // Kim Hi
```

## Copy object

객체복사에는 `얕은복사`와 `깊은복사`가 있습니다. ES6에서 깊은복사 방법이 추가 되었습니다. `얕은복사`는 참조에 의한 할당이 되므로 즉 원본과 복사사본이 같은 주소를 가리키고 있어 값이 동일하게 변경 되는 것을 의미 한다. 반면 `깊은복사`는 주소를 복사해서 공유하는 것이 아닌 새로운 객체를 생성하여 복사하는 것이다.

ES6에서 `assign`, `...spread` 복사는 딱 `1 depth` 까지만 깊은복사가 허용된다. `2 depth` 부터는 얕은 복사가 된다.

```js
// 원본 객체가 1 depth인 경우
// Object.assign 이용한 복사
const obj = {
  a: 1,
  b: 2,
};
const copyObj = Object.assign({}, obj);
copyObj.a = 200;
console.log(copyObj.a, obj.a); // 200, 1

// spread 연산자를 이용한 복사
const obj = {
  a: 1,
  b: 2,
};
const copyObj = { ...obj };
copyObj.a = 200;
console.log(copyObj.a, obj.a); // 200, 1

// 원본 객체가 2 depth인 경우
// Object.assign 이용한 복사
const obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
};
const copyObj = Object.assign({}, obj);
copyObj.b.c = 4;
console.log(copyObj.b.c, obj.b.c); // 4, 4

// Spread 이용한 복사
const obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
};
const copyObj = { ...obj };
copyObj.b.c = 4;
console.log(copyObj.b.c, obj.b.c); // 4, 4
```

깊은 복사를 하고 싶은 경우에는 `JSON.parse()`, `JSON.stringify()` 함수를 이용해서 복사하는 것이 가장 좋다.

## Default parameters

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

## Iterator, for of

## Generator

## Destructing Assignment

구조분해할당은 객체와 배열에서 패턴이 일치되게끔 변수를 할당 받을 수 있습니다. 배열의 각 요소를 배열로부터 디스트럭처링 하여 변수에 할당 받는다.

- Array

```js
// ES5
var name = ["Kim name", "Sam name", "Damo name"];

var kim = name[0];
var sam = name[1];
var damo = name[2];

// ES6
let [kim, sam, damo] = ["Kim name", "Sam name", "Damo name"];
```

- Object

```js
// ES5
var user = {
  name: "Kim",
  age: 34,
  skill: ["Javascript", "React"],
};
console.log(user.name); // Kim
console.log(user.age); // 34
console.log(user.skill); // ["Javascript", "React"]

// ES6
let {
  name,
  age,
  skill: tech, // skill -> tech alias
} = {
  name: "Kim",
  age: 34,
  skill: ["Javascript", "React"],
};
console.log(name); // Kim
console.log(age); // 34
console.log(tech); // ["Javascript", "React"]
```

## Spread operator

## Modules

## Promise

## Map, Set

## Template literal

리터럴 표현식은 내장된 표현식을 허용합니다. 템플릿 리터럴은 숫자 1옆에 있는 **``** `backtick` 키워드를 이용하여 작성할 수 있습니다.

```js
// ES5
var str1 = "this is \n" + " string";
var str2 = "my\nname is\nKim";
var str3 = str1 + ", " + str2;

// ES6
let str1 = `this is \n string`;
let str2 = `my
name is
Kim`;
let str3 = `${str1}, ${str2}`;
```

## Trailing Commas

새로운 엘리먼트나 매개변수, 속성을 자바스크립트 코드에 추가할 때 사용합니다. 배열, 객체에 주로 사용이 되며 `JSON`에서는 허용되지 않습니다.

```js
// ES5
var user = {
  name: "Kim",
  age: 34,
};

// ES6
let user = {
  name: "Kim",
  age: 34,
};
```

JSON에서는 오류가 syntaxError를 발생합니다.

```js
JSON.parse('{"foo" : 1, }'); // Error
JSON.parse('{"foo" : 1 }'); // OK
```

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
