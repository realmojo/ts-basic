# 삭제

자바스크립트의 배열은 실제 객체이기 때문에 배욜의 요소를 삭제하는데 `delete`연산자를 사용할 수 있습니다.

```js
let numbers = ['zero', 'one', 'two', 'three', 'four'];
delete numbers[2];
console.log(numbers); // ['zero', 'one', empty, 'three', 'four']
```

하지만 이런식으로 배열의 요소를 삭제하면 해당 위치에 `empty`라는 구멍이 생기게 됩니다. 즉 삭제한 요소의 오른쪽에 있는 것들은 계속해서 자신의 위치를 유지합니다. 일반적으로 배열의 요소를 삭제하면 오른쪽 요소들이 한 칸씩 좌측으로 옮겨져야 합니다.

배열에는 `splice`라는 메소드를 이용하여 배열의 요소값을 편집할 수 있습니다.

```js
let numbers = ['zero', 'one', 'two', 'three', 'four'];
numbers.splice(2, 1);
console.log(numbers); // ['zero', 'one', 'three', 'four']
```
