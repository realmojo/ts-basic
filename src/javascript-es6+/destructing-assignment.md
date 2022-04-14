# Destructing Assignment

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
