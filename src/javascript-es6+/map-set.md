# Map & Set

## Map

`Map`은 키가 있는 데이터를 저장합니다. 객체와 많이 유사하지만 맵은 키에 다양한 자료형을 허용할 수 있습니다.
아래의 간단한 예제처럼 키 속성에 문자열, 숫자, 불리언, 객체 형 자료까지 가능합니다.

- const map = new Map() - 맵을 생성
- map.set(key, value) - `key` / `value` 값을 저장합니다.
- map.get(key) - `key`에 해당되는 값을 반환합니다. 없으면 `undefined`
- map.has(key) - `key`에 값이 있는지 확인 후 `boolean` 값으로 반환합니다.
- map.delete(key) - `key`에 있는 값을 삭제 후 `boolean` 값으로 반환합니다. 삭제되면 `true` 아니면 `false`
- map.clear() - `key`를 모두 삭제합니다.
- map.size - `key`의 개수를 반환합니다.

```js
let map = new Map();

map.set("1", "string");
map.set(1, "number");
map.set(true, { name: "test" });

console.log(map.get("1")); // string
console.log(map.get(1)); // number
console.log(map.get(true)); // boolean
console.log(map.has(1)); // true
console.log(map.delete(1)); // true
console.log(map.delete(2)); // false
console.log(map.size); // 2
map.clear();
```

맵은 객체형 키를 허용 합니다. 아래의 예제를 봅시다.

```js
// 객체에 객체형 키를 사용할 경우
let user = { name: "Kim" };
let obj = {};
obj[user] = "Sam";

console.log(obj); // { '[object Object]': 'Sam' }

// map에 객체형 키를 사용할 경우
let user = { name: "Kim" };
let map = new Map();
map.set(user, "Sam");

console.log(map.get(user)); // Sam
```

반복요소 작업하기

- map.keys() - 맵의 키를 반복 가능한(이터러블) 객체로 반환합니다.
- map.values() - 맵의 값을 반복 가능한(이터러블) 객체로 반환합니다.
- map.entries() - 맵의 키/값을 반복 가능한(이터러블) 객체로 반환합니다.

```js
let map = new Map();
map.set(1, "a");
map.set(2, "b");
map.set(3, "c");
map.set(4, "d");

for (let item of map.keys()) {
  console.log(item); // 1, 2, 3, 4
}
for (let item of map.values()) {
  console.log(item); // a, b, c, d
}
for (let item of map.entries()) {
  console.log(item); // [1, 'a'], [2, 'b'], [3, 'c'], [4, 'd']
}
```

객체(`object`)를 맵(`map`)으로 변경하기

- `Object.entries()`

```js
let user = {
  name: "Kim",
  age: 34,
};
let mapUser = new Map(Object.entries(user));
console.log(mapUser.get("name")); // Kim
console.log(mapUser.get("age")); // 34
```

맵(`map`)을 객체(`object`)로 변경하기

- `Object.fromEntries()`

```js
let map = new Map();
map.set("name", "Kim");
map.set("age", 34);

let user = Object.fromEntries(map.entries());
console.log(user); // { name: 'Kim', age: 34 }
```

## Set

`Set`은 중복을 허용하지 않는 값들을 모아놓둡니다. `Set`은 키가 없습니다. 오로지 값만 존재합니다.

- const set = new Set(); - 셋을 생성합니다.
- set.add(value) - 값을 추가합니다.
- set.delete(value) - 값을 제거합니다. 성공하면 `true`, 실패하면 `false`
- set.has(value) - 값이 있는지 확인 후 `boolean` 값으로 반환합니다.
- set.clear() - 셋을 초기화 합니다.
- set.size - 셋에 있는 값의 갯수를 반환합니다.

```js
let set = new Set();
set.add("text");
set.add("test");
set.add("text");
set.add("water");
set.add("fire");

console.log(set.delete("water")); // true
console.log(set.has("text")); // true
console.log(set.size); // 3
set.clear();
```

반복요소 작업하기

`set`은 반복이 가능한 이터러블이기 때문에 `for..of`문으로 반복이 가능합니다.

```js
let set = new Set();
set.add("text");
set.add("test");
set.add("text");
set.add("water");
set.add("fire");

for (let item of set) {
  console.log(item);
}
```

## 배열 중복요소 제거

`set`은 중복을 허용하지 않는 컬렉션 입니다. 배열에 있는 중복값을 제거하고 싶으시다면 `set`으로 만든다음 다시 배열로 타입을 바꾸면 됩니다.

```js
let arr = [1, 2, 3, 4, 5, 3, 2, 1, 1, 3, 3, 2, 4, 5, 6];

let uniqueArr = Array.from(new Set(arr));
console.log(uniqueArr); // [1, 2, 3, 4, 5, 6]
```
