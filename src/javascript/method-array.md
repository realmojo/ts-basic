# 배열

## at

배열의 인덱스 요소를 반환하는 함수 입니다. 양수와 음수 모두 지정할 수 있으며 음수의 경우 뒤에서부터 인덱스를 셉니다. 일반적으로 많은 개발자들이 뒤에서 값을 가져오고 싶을 때 `arr[arr.length - 1]`을 많이 사용하는데 `at`을 사용하면 가독성이 더 높아지고 코드가 간결해 집니다.

```js
let arr = ['test0', 'test1', 'test2', 'test3', 'test4'];
console.log(arr.at(2)); // test2
console.log(arr.at(-1)); // test4
```

## concat

두 배열을 합칠 때 사용 합니다.

```js
let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
let array3 = array1.concat(array2, true);
console.log(array3); // ['a', 'b', 'c', 'd', 'e', 'f', true]
```

asdf
