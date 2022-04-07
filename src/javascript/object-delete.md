# 삭제

`delete` 연산자를 사용하면 객체의 속성을 삭제할 수 있습니다. `delete`연산자는 해당 속성이 객체에 있을 경우에만 삭제를 하고 프로토타입 연결 상에 있는 객체에는 접근을 하지 않습니다.

```js
let user = {
  name: 'Kim',
  age: 34,
};

console.log(user.name); // Kim
delete user.name;
console.log(user.name); // undefined
```
