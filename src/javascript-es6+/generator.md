# Generator

제네레이터는 이터러블을 가지고 있는 함수를 정의하는 것입니다. 제네레이터를 사용하면 이터러블을 직접 구현하는 것보다 더 간편하게 함수로 반복가능한 함수를 만들 수 있습니다. 기존의 함수를 생성할 때와 다르게 `function*` 키워드를 이용하여 생성하고 반환값은 `return`이 아닌 `yield`를 이용하여 반환 합니다.

```js
function* generator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

let gen = generator();
let item = gen.next();
do {
  console.log(item);
  item = gen.next();
} while (!item.done);

// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }

let gen2 = generator();
for (const g of gen2) {
  console.log(g); // 1, 2, 3, 4
}
```

제네레이터는 이터러블이기 때문에 `for..of` 구문에서 사용이 가능합니다. 제네레이터는 `yield`키워드를 이용하여 함수의 반환값을 정의할 수 있으며 스스로 실행을 멈출 수 있습니다. 호출하는 시점에서 `next()`함수를 호출할 때마다 `yield`키워드가 하나씩 호출이 됩니다. 그렇기 때문에 비동기적인 코드에서 유용하게 사용할 수 있습니다.
