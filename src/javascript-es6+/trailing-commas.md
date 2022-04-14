# Trailing Commas

새로운 엘리먼트나 매개변수, 속성을 자바스크립트 코드에 추가할 때 사용합니다. 데이터가 늘어날 경우를 대비해서 사용합니다. 배열, 객체에 주로 사용이 되며 `JSON`에서는 허용되지 않습니다. 대부분 `VS code`의 `code formater`때문에 자동적으로 사용하게 되었습니다.

```js
// ES5
var user = {
  name: "Kim",
  age: 34
};

// ES6
let user = {
  name: "Kim",
  age: 34,
};
```

JSON에서는 오류가 syntaxError를 발생합니다.

```js
JSON.parse('{"foo" : 1, }'); // Error
JSON.parse('{"foo" : 1 }'); // OK
```
