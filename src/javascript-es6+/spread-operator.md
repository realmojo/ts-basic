# Spread operator

스프레드 연산자를 이용하면 반복가능한 문자열, 배열, 객체 등을 분리할 수 있습니다.

## 배열 병합

```js
// ES5
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = arr1.concat(arr2);

// ES6
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
arr1.push(...arr2);

console.log(arr3); // [1, 2, 3, 4, 5, 6]
console.log(arr1); // [1, 2, 3, 4, 5, 6]
```

## 배열 얕은복사

배열은 변수로 대입해서 복사하는 경우에는 얕은복사로 진행이 됩니다. 즉 참조에 의한 복사가 되어 복사본을 변경시 원본도 같이 변경 됩니다.

```js
let arr1 = [1, 2, 3];
let arr2 = arr1;

// 복사본에 4 값을 추가
arr2.push(4);

// 원본도 같이 변경 됩니다.
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
```

## 배열 깊은복사

배열에 객체(`object`)형은 얕은복사 그 이외의 값은 깊은복사가 됩니다.

```js
// ES5
var arr1 = [1, 2, 3];
var arr2 = arr1.slice();

arr2.push(4);
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3, 4]

// ES6
let arr1 = [1, 2, 3];
let arr2 = [...arr1];

arr2.push(4);
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3, 4]

// object 는 얕은복사가 수행이 됌
let arr3 = [1, 2, 3, { name: "Kim" }];
let arr4 = [...arr3];

arr4[3].name = "Sam";
console.log(arr3); // [1, 2, 3, {name: "Sam"}]
console.log(arr4); // [1, 2, 3, {name: "Sam"}]
```

## rest parameter

함수에서 매개변수를 받을 때 나머지를 전부 받겠다는 형식으로 사용이 가능합니다.

```js
const total = (...numbers) => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

console.log(total(1)); // 1
console.log(total(1, 2)); // 3
console.log(total(1, 2, 3)); // 6
console.log(total(1, 2, 3, 4)); // 10
```

::: warning
rest parameter를 사용하는 경우 마지막 인자값에만 사용을 해야 합니다. <br/>
function total(type, ...rest) -> O <br/>
function total(...rest, type) -> X
:::
