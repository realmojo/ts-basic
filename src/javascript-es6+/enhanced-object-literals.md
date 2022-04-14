# Enhanced Object Literals

## Concise Method

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

## Shorthand Property

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

## Computed property

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
