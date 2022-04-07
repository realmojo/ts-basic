# 속성값 갱신

객체의 값은 할당에 의해 갱신합니다. 할당하는 표현식에서 속성 이름이 이미 객체 안에 존재하면 새로운 값으로 교체가 됩니다.

```js
let user = {
  name: 'Kim',
};
console.log(user.name); // Kim
user.name = 'Sam';
console.log(user.name); // Sam
```
