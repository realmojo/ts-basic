# Template literal

리터럴 표현식은 내장된 표현식을 허용합니다. 템플릿 리터럴은 숫자 1옆에 있는 **``** `backtick` 키워드를 이용하여 작성할 수 있습니다.

```js
// ES5
var str1 = "this is \n" + " string";
var str2 = "my\nname is\nKim";
var str3 = str1 + ", " + str2;

// ES6
let str1 = `this is \n string`;
let str2 = `my
name is
Kim`;
let str3 = `${str1}, ${str2}`;
```
