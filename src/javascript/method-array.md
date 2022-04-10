# 배열

## at

배열의 인덱스 요소를 반환하는 함수 입니다. 양수와 음수 모두 지정할 수 있으며 음수의 경우 뒤에서부터 인덱스를 셉니다. 일반적으로 많은 개발자들이 뒤에서 값을 가져오고 싶을 때 `arr[arr.length - 1]`을 많이 사용하는데 `at`을 사용하면 가독성이 더 높아지고 코드가 간결해 집니다.

```js
let arr = ["test0", "test1", "test2", "test3", "test4"];
console.log(arr.at(2)); // test2
console.log(arr.at(-1)); // test4
```

::: warning
Internet Explorer 에서는 지원이 되지 않습니다.
:::

## concat

두 배열을 합칠 때 사용 합니다.

```js
let arr1 = ["a", "b", "c"];
let arr2 = ["d", "e", "f"];
let arr3 = arr1.concat(arr2, true);
console.log(arr3); // ['a', 'b', 'c', 'd', 'e', 'f', true]
```

## entries

배열의 각 인데스에 대한 키/값 쌍을 Iterator객체로 반환합니다.

```js
let arr = ["a", "b", "c", "d", "e"];

const d = arr.entries();
console.log(d.next()); // { value: [ 0, 'a' ], done: false }
console.log(d.next()); // { value: [ 1, 'b' ], done: false }
console.log(d.next()); // { value: [ 2, 'c' ], done: false }
console.log(d.next()); // { value: [ 3, 'd' ], done: false }
console.log(d.next()); // { value: [ 4, 'e' ], done: false }
console.log(d.next()); // { value: undefined, done: true }
```

## every

배열 안에 있는 모든 요소가 주어진 판별함수를 모두 통과하는지 검사하는 메소드 입니다. Boolean 값을 반환 합니다.

```js
let arr = ["a", "b", "c", "d", "e"];

const isFCheck = arr.every((item) => item !== "f");
console.log(isFCheck); // true
```

## fill

배열의 시작 인덱스부터 끝 인덱스까지 특장 값을 하나로 채웁니다.

```js
let arr = ["a", "b", "c", "d", "e"];

// z값을 2번째 부터 4번째 까지
const d = arr.fill("z", 2, 4);
console.log(d); // ['a', 'b', 'z', 'z', 'e']

// z값을 1번째 부터 끝까지
const e = arr.fill("z", 1);
console.log(e); // ['a', 'z', 'z', 'z', 'z']

// z값을 처음부터 끝까지
const f = arr.fill("z");
console.log(f); // ['z', 'z', 'z', 'z', 'z']
```

## filter

주어진 함수를 통과하는 요소를 합쳐 새로운 배열로 반환합니다.

```js
let arr = ["a", "b", "c", "d", "e"];

const newArr = arr.filter((item) => {
  return item !== "c" && item !== "d";
});

console.log(newArr); // ['a', 'b', 'e']
```

## find

주어잔 판별함수를 통과하는 첫 번째 인덱스의 값을 반환 합니다. 요소가 없다면 `undefined`를 반환합니다.

```js
let arr = [43, 22, 57, 12, 98, 77];

const firstValue = arr.find((item) => item > 50);

console.log(firstValue); // 57
```

## findIndex

주어잔 판별함수를 통과하는 첫 번째 인덱스를 반환 합니다. 요소가 없다면 `-1`를 반환합니다.

```js
let arr = [43, 22, 57, 12, 98, 77];

const firstIndex = arr.findIndex((item) => item > 50);

console.log(firstIndex); // 2
```

## flat

하위 배열 모든 요스를 지정한 깊이까지 재귀적으로 붙인 새로운 배열을 반환합니다.

매개변수: `depth(optional)` => 중첩 배열 구조를 평평하게 만들 때 사용할 깊이 값. 기본값은 1입니다.

```js
let arr = [1, 2, [3, 4, [5, 6]], [7, 8], [{ name: "Kim" }], [true, false]];

console.log(arr.flat()); // [1, 2, 3, 4, [ 5, 6 ], 7, 8, { name: 'Kim' }, true, false]
console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6 , 7, 8, { name: 'Kim' }, true, false]
```

## flatMap

매핑함수를 사용하여 각 엘리먼트를 map 수행후 결과를 새로운 배열로 평평하게 만듭니다. `flapMap`은 필터링을 2개 이상할 때 유용하며 하나의 메소르로 병합할 때 조금 더 효율적입니다.

```js
let arr = [43, 22, 57, 12, 98, 77];

console.log(arr.map((item) => [item + 1]));
// [[44], [23], [58], [13], [99], [78]]

console.log(arr.flatMap((item) => [item + 1]));
// [44, 23, 58, 13, 99, 78];

let arr1 = ["This is a", "", "notebook"];

console.log(arr1.map((x) => x.split(" ")));
// [["This", "is", "a"], [""], ["notebook"]];

console.log(arr1.flatMap((x) => x.split(" ")));
// ["This", "is", "a", "notebook"];

// 다음은 음수는 제거하고 홀수는 1과 짝수로 분리하는 예시입니다.
let a = [5, 4, -3, 20, 17, -33, -4, 18];
//      |\  \   x  |   |\   x    x   \|
//      [4, 1, 4,  20, 16, 1,       18]

console.log(a.flatMap((n) => (n < 0 ? [] : n % 2 == 0 ? [n] : [n - 1, 1])));
// expected output: [4, 1, 4, 20, 16, 1, 18]
```

## forEach

배열의 모든 요소를 값/키 순으로 순회합니다.

```js
let arr = [43, 22, 57, 12, 98, 77];

arr.forEach((item, key) => {
  console.log(`${key}: ${item}`);
});

// 0: 43
// 1: 22
// 2: 57
// 3: 12
// 4: 98
// 5: 77
```

## includes

배열이 특정 요소를 포함하고 있는지 판별합니다. 두번째 매개변수는 `fromIndex`를 의미합니다.

```js
let arr = [43, 22, 57, 12, 98, 77];

console.log(arr.includes(57)); // true
console.log(arr.includes(21)); // false

console.log(arr.includes(57, 2)); // true
console.log(arr.includes(57, 3)); // false
```

## indexOf

배열에서 지정된 요소 중 첫번째 인덱스를 반환합니다. 없으면 -1을 반환합니다. 두번째 매개변수는 `fromIndex`를 의미합니다.

```js
let arr = [43, 22, 57, 12, 98, 22, 77];

console.log(arr.indexOf(22)); // 1
console.log(arr.indexOf(22, 2)); // 5
console.log(arr.indexOf(42)); // -1
```

## join

배열의 모든 요소를 특정 문자값으로 연결하여 하나의 문자열을 반환합니다. 기본값은 `,` 입니다.

```js
let strArr = ["My", "name", "is", "javascript", "&", "typescript"];
console.log(strArr.join("-")); // My-name-is-javascript-&-typescript
```

## keys

배열의 각 인덱스를 키 값으로 가지는 새로운 배열 Iterator 객체를 반환합니다.

```js
let strArr = ["My", "name", "is", "javascript", "&", "typescript"];
let keys = strArr.keys();

console.log(keys); // Object [Array Iterator] {}

for (const key of keys) {
  console.log(key); // 0, 1, 2, 3, 4, 5
}
```

## lastIndexOf

배열에서 주어진 값을 발견하는 마지막 `index`의 값을 반환합니다. 없으면 -1을 반환하고 두번째 매개변수인 `fromIndex`에서 시작하여 뒤로 진행 합니다.

```js
let strArr = [
  "My",
  "name",
  "is",
  "javascript",
  "javascript",
  "javascript",
  "&",
  "typescript",
];
console.log(strArr.lastIndexOf("javascript")); // 5
```

## map

배열내의 모든 요소에 각각 주어진 함수를 호출하여 새로운 결과를 반환합니다.

```js
let arr = [1, 2, 3, 4, 5];
console.log(arr.map((item) => item * 2)); // 2, 4, 6, 8, 10
```

## pop

배열에서 마지막 요소를 제거하고 반환합니다.

```js
let arr = [1, 2, 3, 4, 5];
console.log(arr.pop()); // 5
console.log(arr); // [1, 2, 3, 4]
```

## push

배열에 마지막 요소에 값을 추가 합니다.

```js
let arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr); // [1, 2, 3, 4, 5]
```

## reduce

배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고 하나의 결과값을 반환합니다.

```js
let arr = [1, 2, 3, 4, 5];

let initValue = 0;
let sum = arr.reduce((prev, curr) => {
  return prev + curr;
}, initValue);
console.log(sum); // 15
```

`reduce`함수는 4개의 인자 값을 가집니다.

- 누산기(acc)
- 현재 값(cur)
- 현재 인덱스(idx)
- 원본 배열(arr)

리듀서 함수의 반환 값은 누산기에 할당되고, 누산기는 순회 중 유지되므로 결국 최종 결과는 하나의 값이 됩니다.

다음의 예제를 보겠습니다.

```js
[0, 1, 2, 3, 4].reduce((acc, cur, idx, arr) => {
  return acc + cur;
});
```

콜백은 4번 호출됩니다. 각 호출의 인수와 반환값은 다음과 같습니다.
|callback|acc|cur|idx|array|반환 값|
|--------|---|---|---|-----|-----|
|1번째호출 | 0| 1| 1|[0, 1, 2, 3, 4]|1|
|2번째호출 | 1| 2| 2|[0, 1, 2, 3, 4]|3|
|3번째호출 | 3| 3| 3|[0, 1, 2, 3, 4]|6|
|4번째호출 | 6| 4| 4|[0, 1, 2, 3, 4]|10|

## reverse

배열의 요소를 반대로 전환합니다.

```js
let arr = [1, 2, 3, 4, 5];
console.log(arr.reverse()); // [5, 4, 3, 2, 1]
```

## shift

배열의 첫 번째 요소를 제거하고 반환합니다.

```js
let arr = [1, 2, 3, 4, 5];
let firstValue = arr.shift();

console.log(firstValue); // 1
console.log(arr); // [2, 3, 4, 5]
```

## slice

배열의 `start`부터 `end`까지의 요소를 반환합니다. `end`가 음수일 경우에는 뒤에서 부터 시작합니다.

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.slice(1, 3)); // [2, 3]
console.log(arr.slice(4, 9)); // [5, 6, 7, 8, 9]
```

## some

배열의 값을 하나라도 통과하면 `true`를 반환합니다.

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.some((item) => item > 11)); // false
console.log(arr.some((item) => item > 1)); // true
```

## sort

배열의 값을 재정렬 할 때 사용 합니다. 기본적으로는 오름차순으로 정렬이 됩니다.

```js
let arr = [3, 6, 2, 9, 5, 1, 10, 4, 8, 7];
console.log(arr.sort()); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
```

자세히 보면 1, 10 으로 숫자가 정렬이 되었는데 자바스크립트에서 기본 정렬순서는 문자열의 유니코드이기 때문입니다. 숫자로 오름차순 정렬을 해야할 경우에는 아래와 같이 해야합니다.

```js
let arr = [3, 6, 2, 9, 5, 1, 10, 4, 8, 7];
let reArr = arr.sort((a, b) => {
  return a - b;
});
console.log(reArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

객체의 속성으로 정렬을 하고 싶은 경우에는 아래의 예제와 같이 많이 사용합니다.

```js
var items = [
  { name: "Edward", age: 21 },
  { name: "Sharpe", age: 37 },
  { name: "And", age: 45 },
  { name: "The", age: 12 },
  { name: "Magnetic", age: 13 },
  { name: "Zeros", age: 37 },
];

// value 기준으로 정렬
age.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

// name 기준으로 정렬
items.sort(function (a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // 이름이 같을 경우
  return 0;
});
```

## splice

배열의 기존 요소를 삭제하거나 혹은 교체하거나 또는 새 요소를 추가하여 내용을 변경합니다.

### 하나도 제거하지 않고 2번 인덱스에 10 추가

```js
let arr = [1, 2, 3, 4, 5];
let value = arr.splice(2, 0, 10);
console.log(value, arr); // [], [1, 2, 10, 4, 5]
```

### 하나도 제거하지 않고 2번 인덱스에 10,11 추가

```js
let arr = [1, 2, 3, 4, 5];
let value = arr.splice(2, 0, 10, 11);
console.log(value, arr); // [], [1, 2, 10, 11, 4, 5]
```

### 3번 인덱스 한 개 요소 제거

```js
let arr = [1, 2, 3, 4, 5];
let value = arr.splice(3, 1);
console.log(value, arr); // [4], [1, 2, 3, 5]
```

### 3번 인덱스 한 개 요소 제거 후 10 추가

```js
let arr = [1, 2, 3, 4, 5];
let value = arr.splice(3, 1, 10);
console.log(value, arr); // [4], [1, 2, 3, 10, 5]
```

### 2번 인덱스 후 모두 제거

```js
let arr = [1, 2, 3, 4, 5];
let value = arr.splice(2);
console.log(value, arr); // [3, 4, 5], [1, 2]
```

## toString

배열안의 요소를 문자열로 반환 합니다.

```js
let arr = [1, 2, 3, 4, 5, true];
console.log(arr.toString()); // "1,2,3,4,5,true"
```

## unshift

배열안의 요소를 맨 앞쪽에 추가합니다.

```js
let arr = [1, 2, 3];
console.log(arr.unshift(4, 5)); // 5
console.log(arr); // [4, 5, 1, 2, 3]
```

## values

배열의 각 인덱스에 대한 값을 가지는 새로운 `Array Iterator`를 반환 합니다.

```js
let array1 = ["a", "b", "c"];
let iterator = array1.values();

for (let value of iterator) {
  console.log(value); // a, b, c
}
```

## Array.from

유사 배열 객체나 반복 가능한 객체를 얕게 복사해서 새로운 배열을 반환 합니다.

### 구문

```js
Array.from(arrayLike[, mapFn[, thisArg]])
```

### 매개변수

`arrayLike`

    배열로 변환하고자 하는유사 배열 객체나 반복 가능한 객체.

`mapFn(Optional)`

    배열의 모든 요소에 대해 호출할 맵핑 함수.

`thisArg(Optional)`

    mapFn 실행 시에 this로 사용할 값.

```js
let arr = [43, 22, 57, 12, 98, 77];

console.log(Array.from(arr, (x) => x + 1));

let string = "this is a string";
console.log(Array.from(string));
```

## Array.isArray

배열인지 아닌지 판별하는 메소드 입니다.

```js
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({ foo: 123 })); // false
console.log(Array.isArray("foobar")); // false
console.log(Array.isArray(undefined)); // false
```
