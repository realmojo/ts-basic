# Iterable, Iterator

## Iterable

이터러블은 반복가능한 객체를 의미 합니다. Array, Map, String 과 같은 자료형은 반복가능한 자료형입니다. 반면에 Object 객체는 반복가능한 자료형이 아닙니다. 반복가능하기 위해서는 @@iterator메서드가 있어야 합니다. 즉 객체가 Symbol.iterator 키를 가지고 있는 메소드가 있어야 합니다.

이터러블 객체는 반복문 `for..of`문을 사용할 수 있습니다. Object는 이터러블 자료형이 아니기 때문에 `for..of` 대신 `for..in`을 사용해야 합니다.

```js
let str = "string";
let arr = [1, 2, 3];
let map = new Map([
  [1, 2],
  [3, 4],
]);

for (let item of str) {
  console.log(item);
}
for (let item of arr) {
  console.log(item);
}
for (let item of map) {
  console.log(item);
}
```

::: tip ES6에서 기본으로 제공하는 이터러블
Array, String, Map, Set, TypedArray(Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array), DOM data structure(NodeList, HTMLCollection), Arguments
:::

일반적으로 객체는 이터러블하지 않습니다. 왜냐면 객체에는 Symbol.iterator 키가 없기 때문입니다.

## Iterator

이터레이터란 반복가능한 자료형을 만들기 위해 `Symbol.iterator`키 값으로 가지고 있는 메소드 입니다. 이터레이터는 `next()` 메소드를 호출하면 `done`, `value`값을 리턴해야 합니다.

`Iterable` 호출(`for..of`)하면 `Iterator` 속성이 작동합니다. 이는 `next()` 함수를 호출하여 `{ done: true }` 일때 까지 순회를 하는 구조 입니다.

```js
const arr = [1, 2, 3];

const iterator = arr[Symbol.iterator](); //Symbol.itrator를 호출합니다.

for (let item of arr) {
  console.log(item);
}

// 위의 for..of 구문을 풀어서 설명하면 아래와 같습니다.
let item = iterator.next();
do {
  console.log(item);
  item = iterator.next();
  if (item.done === true) {
    console.log(item);
  }
} while (!item.done); // done 값이 true이면 끝

//{ value: 1, done: false }
//{ value: 2, done: false }
//{ value: 3, done: false }
//{ value: undefined, done: true }
```
