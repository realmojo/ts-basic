# 타입 추론

타입스크립트는 일반적으로 타입을 명시해주는게 가장 좋지만 그렇지 않을 경우 타입스크립트 내부 로직에 의하여 자동적으로 타입을 추론하게 됩니다.

## 추론의 기본

기본적으로 타입스크립트의 추론은 우측에 있는 변수의 타입을 기준으로 추론을 하게 됩니다.

```js
let a = 3; // number
let b = "text"; // string
let c = true; // boolean
let d = [1, 2, 3]; // number[]
let e = ["a", "b", "c"]; // string[]
```

## let vs const

아래의 예제를 보면 둘다 number로 추론이 될것 같지만 실제로는 다릅니다. **a**, **b**, **c**는 우리가 생각하는 `number`, `string`으로 추론이 되지만 **d**의 경우에는 `text`로 추론이 됩니다.

```js
let a = 3; // number
let b: number = 3; // number
const c: string = "text"; // string
const d = "text"; // text
```

즉 데이터가 변하지 않을 것이라고 가정을 하게 된다면 리터럴 타입로 추론이 되는 것을 짐작할 수 있습니다.

## Contextual Typing

타입 추론은 타입스크립트에서 문맥상에서 타입을 추론하기도 합니다. 개발자가 암시적으로 표현을 하였을 때 문맥적인 타이핑이 발생 합니다. [[참조](https://www.typescriptlang.org/docs/handbook/type-inference.html#contextual-typing)]

```js
window.onmousedown = function (mouseEvent) {
  console.log(mouseEvent.button); // 타입 추론
  console.log(mouseEvent.kangaroo); // 오류
};
```

타입스크립트는 `window.onmousedown` 함수의 유형을 사용하여 함수표현식을 유추 하였습니다. `button`속성은 추론을 하였지만 `kangaroo`는 추론하지 못하였습니다. 그 이유를 살펴보면 다음과 같습니다. [[MouseEvent API](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button)]

이미 `onmousedown`타입으로 선언되어 있기 때문에 작동을 합니다.

```js
// Declares there is a global variable called 'window'
declare var window: Window & typeof globalThis;
// Which is declared as (simplified):
interface Window extends GlobalEventHandlers {
  // ...
}
// Which defines a lot of known handler events
interface GlobalEventHandlers {
  onmousedown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  // ...
}
```

윈도우 이벤트의 다른 예제를 살펴보겠습니다.

```js
window.onscroll = function (uiEvent) {
  console.log(uiEvent.button); // 오류
};
```

위의 함수의 인자값 uiEvent는 mouseEvent가 아니기 때문에 Button 속성을 참조할 수 없습니다. [[uiEvent API](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent)]

```js
const handler = function (uiEvent: any) {
  console.log(uiEvent.button); // <- OK
};
```

위의 함수 처럼 사용하면 uiEvent는 이벤트핸들러가 아닌 일반 변수이기 때문에 오류가 나지 않습니다. 하지만 `tsconfig.json` 에서 `--noImplicityAny: true` 옵션을 사용하면 오류가 납니다.
