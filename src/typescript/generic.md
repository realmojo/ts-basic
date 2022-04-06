# 제네릭

Java, C#, Golang 같은 정적언어의 경우에는 함수 선언시에 타입을 선언하도록 되어 있습니다. 변수를 선언시에도 타입을 선언하지만(Golang 제외) 대체적으로 정적언어들은 타입을 엄격하게 관리하게끔 되어 있습니다. 그러나 함수를 선언시에 타입을 선언하기 어려운 구조가 있을 수 있습니다. 이럴 때 제네릭을 사용합니다.

제네릭은 선언을 하는 시점이 아닌 생성 시점에서 타입을 결정하며 하나의 타입이 아닌 여러개의 타입을 받을 수 있도록 설계하는 구조를 의미 합니다. 기본형은 다음과 같습니다. `T`의 경우는 관용적으로 개발자들 사이에서 사용하는 철자이며 꼭 `T`를 사용하지 않아도 됩니다. `T`는 Type Parameter의 약자입니다. 제네릭을 사용하면 다양한 타입의 인자값과 리턴값을 사용할 수 있습니다.

타입스크립트 제네릭 기본 형식

```js
// 함수 선언식
function logMessage<T>(text: T): T {
  return text;
}

let messageString: string = logMessage<string>('Log Message');
let messageNumber: number = logMessage<number>(23);
```

string을 선언하여 선언시점에 타입을 명시하는 것입니다. 또는 number로 선언 하였을 경우 logMessage의 타입은 number로 작동이 됩니다.

## 제네릭 사용 이유

제네릭을 사용하는 이유는 하나의 함수를 이용하여 다양한 타입을 받아 재사용성을 높이기 위함 입니다. 또한 `any`와 다르게 타입을 검사하기 때문에 좀 더 타입스크립트 다운 코딩을 할 수 있습니다. `any`의 경우에는 타입을 검사하지 않습니다.

## 화살표 함수 제네릭

화살표 함수에서 제네릭을 하나만 사용할 경우에는 \<T\>뒤에 extends 값을 지정해 줘야 한다. 그렇지 않으면 JSX 문법에 의해 꺽쇠가 HTML 태그로 인식하기 때문입니다. 일반적으로 extends {} 를 많이 사용하지만 그렇게 되어버리면 객체로 한정지어버리기 때문에 unknown을 사용하여 더 많은 값이 들어올 수 있다고 알려줍니다.

```js
// 화살표 함수
const logMessage = <T extends unknown>(text: T): T => {
  return text;
}

// 화살표 함수
const logMessageArr = <T, U>(text1: T, text2: U): [T, U] => {
  return [text1, text2];
}
```
