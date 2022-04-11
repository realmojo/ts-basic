# 함수

## length

함수 인자값의 갯수를 반환합니다.

```js
let add = (a, b) => {
  return a + b;
};

console.log(add.length); // 2
```

## name

함수 명칭을 반환합니다.

```js
let add = (a, b) => {
  return a + b;
};

console.log(add.name); // add
```

## call

`call`은 첫 번째 인자로 this를 넘겨주고 나머지는 인자 그대로 사용해주면 됩니다.

```js
let add = (a, b) => {
  return a + b;
};
console.log(add.call(null, 3, 4)); // 7
```

## apply

`call`과 동작이 비슷하지만 나머지 인자를 배열로 전달해야 합니다.

```js
let add = (a, b) => {
  return a + b;
};
console.log(add.apply(null, [3, 4])); // 7
```

## bind

`bind`함수는 `call`, `apply`처럼 함수를 실행하지 않고 새로운 함수를 반환합니다.

```js
let obj = { name: "Kim" };
let say = function (age) {
  console.log(`Hi, My name is ${this.name}, I'm ${age} years old.`);
};
let newObj = say.bind(obj);
console.log(newObj(44));
```
