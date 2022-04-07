# 열거

`for in` 구문을 사용하면 객체에 있는 모든 속성을 열거할 수 있습니다. 이러한 방법에는 프로토타입에 있는 속성이나 함수 등 모든 속성이 포함되기 때문에 원하지 않는 것들은 걸러내야 합니다. 가장 일반적으로는 `hasOwnProperty` 메소드와 함수를 배제하기 위해 `typeof`를 사용합니다.

```js
let user = {
  name: 'Kim',
  age: 34,
  skills: ['Javascript', 'Html5'],
  getAge: function () {
    return 34;
  },
};
for (let i in user) {
  if (typeof user[i] !== 'function') {
    console.log(user[i]); // Kim, 34, ['Javascript', 'Html5']
  }
}
```
