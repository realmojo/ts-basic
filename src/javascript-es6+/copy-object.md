# Copy object

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

```js
const copyObject = JSON.parse(JSON.stringify(originObject));
```
