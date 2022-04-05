# 함수

타입스크립트에서 함수를 나타내는 방법은 여러가지 이며 기존 자바스크립트와 달라진점은 2가지 입니다.

- 인자값에 타입을 정의
- 리턴값에 타입을 정의

타입을 정의하는 것이기 때문에 `number`, `string`, `void`, `number[]` 이외의 `type`, `interface`로 정의된 타입들도 선언이 가능합니다.

## 함수 선언

```js
// 추론된 리턴
function sum(a: number, b: number) {
  return a + b;
}

// 정의된 리턴
function sum(a: number, b: number): number {
  return a + b;
}
```

`interface` 타입을 인자값으로 정의

```js
interface User {
  name: string;
  age: number;
}

function getUsername(user: User): string {
  return user.name;
}
```

`interface` 타입을 리턴값으로 정의

```js
interface User {
  name: string;
  age: number;
}

function getUser(user: User): User {
  return user;
}
```

## 리턴 값이 없는 경우

리턴 값이 없을 경우에는 `void`를 선언해주면 됩니다.

```js
function logMessage(text: string): void {
  console.log(text);
}
```

## 매개변수 옵셔널

인자값을 선택적으로 받고 싶을 때 `?`를 변수 우측에 적어줍니다.

```js
function logMessage(text?: string): void {
  console.log(`logMessage: ${text}`);
}
```
