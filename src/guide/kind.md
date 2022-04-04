# 기본 타입의 종류

## number

- 숫자 타입을 선언할 때 사용

```js
const age: number = 33;
```

## string

- 문자열 타입을 선언할 때 사용

```js
const name: string = "Ted";
```

## boolean

- 불리언(참/거짓) 타입을 선언할 때 사용

```js
const isShow: boolean = true;
```

## array

- 배열 타입을 선언할 때 사용

```js
const skills1: string[] = ["HTML", "CSS", "Javascript"];
const skills2: Array<string> = ["Java", "Node.js", "Golang"];
```

## object

- 객체 타입을 선언할 떄 사용

```js
const person: object = {
  name: "Ted",
  age: 34,
  isAdult: true,
};
```

## tuple

- 배열에서 서로 다른 타입을 선언할 때 사용

```js
const arr: [number, string, boolean] = [33, "Ted", true];
```

## enum

- 숫자를 입력하면 양방향(키 <-> 값)으로 매핑
- 문자를 입력하면 단방향(키 -> 값)으로 매핑

```js
enum Frontend {
   Javascript,
   Html,
   Css,
   Typescript,
   React,
   Vue
}

// 양방향 매핑
console.log(Frontend.Javascript); // 0
console.log(Frontend[0]); // Javascript
console.log(Frontend.Html); // 1
console.log(Frontend[1]); // Html
```

```js
enum Backend {
   Java = "java",
   Node = "node",
   Golang = "golang",
   Php = "php",
   Python = "python"
}

// 단방향 매핑
console.log(Backend.Java); // java
console.log(Backend.Node); // node
```

## null

- 명시적으로 빈 값을 선언한 객체 자료

```js
const damo: null = null;
console.log(damo); // null
```

## undefined

- 정의되지 않거나 할당되지 않은 변수를 참조할 때 사용

```js
const foo: undefined = undefined;
console.log(foo);
```

## void

- 함수를 작성 시 반환(return) 값이 없을 경우 사용

```js
function sum(a: number, b: number): void {
  console.log(a + b);
}
```

## never

- 함수를 작성 시 끝나지 않을 경우 사용

```js
function sum(): never {
  while (true) {
    // ...
  }
}

function err(message: string): never {
  throw new Error(message);
}
```

## Type assertions (타입단언)

- 개발자가 자신이 하고 있는 것에 대하 잘 안다고 설명하는 것. `as` 키워드를 사용해야 한다.

```js
let value: any = "this is a string";
let valueLength: number = (value as string).length;
```
