# 객체 참조

객체는 참조 방식으로 전달됩니다. 복사가 되는 것이 아닙니다.

```js
let user = {
  name: 'Kim',
};
let a = user;
a.name = 'Sam';
let nick = user.name;
console.log(nick); // Sam
```

`참조`는 변수의 메모리(주소) 값이 같은것을 의미하며 `복사`는 새로운 변수 메모리(주소)에 똑같이 하나가 새로 생성되는 원리 입니다.
