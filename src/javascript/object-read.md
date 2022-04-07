# 속성값 읽기

객체에 속한 속성의 값은 속성 이름을 대괄호로 둘러싼 형태로 읽을 수 있습니다. 속성 이름이 유효한 자바스크립트 이름이거나 예약어가 아닐 경우에는 마침표 표기법으로 사용할 수 있습니다. 객체에 없는 속성을 읽으려고 하면 `undefined`를 반환합니다.

```js
let user = {
  'first-name': 'John', // 속성에 따음표가 필요함
  last_name: 'Kim', // 속성에 따음표 생략이 가능함
};

console.log(user['first-name']); // John
console.log(user.last_name); // Kim
console.log(user.age); // undefined
```

`||` 연산자를 사용하여 기본값을 지정할 수 있습니다.

```js
let firstName = user['first-name'] || 'none';
let firstName = user.last_name || 'last_name';
```

존재하지 않는 속성을 참조하려고 할 경우에는 TypeError이 발생합니다. 이런 상황을 방지하기 위해 `&&`연산자를 사용할 수 있습니다.

```js
let user = {
  name: 'Kim',
};
console.log(user.age); // undefined
console.log(user.age.info); // throw TypeError
console.log(use.age && user.age.info); // undefined
```
