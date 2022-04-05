# 타입 별칭

## 타입 개념

- 타입 별칭(alias)은 새로운 타입을 정의 합니다.
- 개발자의 의도를 명확하게 구분할 수 있습니다.
- 타입 이외의 값으로 변경할 수 없습니다.

## 리터럴 개념

- 리터럴이란 값에 값을 명시적 지정하는 것을 의미하며 타입과 상당히 유사합니다. 사전적 의미로는 문자 자체의, 문자 그대로를 뜻 합니다. 즉 소스코드에 직접적으로 표현된 것을 의미하며 데이터 값을 표현하는 방식이라고 말합니다.

```js
123; // number literal
("string"); // string literal
true, false; // boolean literal
null; // null literal
undefined; // undefined literal
{
} // object literal
```

## 타입을 정의하는 방법

- `valu1`, `value2`, `value3` 의 타입은 string, number, boolean, object, array, undefined, null, interface 등으로 사용이 가능합니다. 여러개의 타입을 추가하실 경우에는 union type(|)으로 추가가 가능합니다.

```js
type variable_name = value1 | value2 | value3;
```

### String Types

- `COLOR` 타입에 4가지 데이터를 지정하였습니다. 색상을 입력할 때 4가지 색상 이외의 값을 입력하면 오류가 발생합니다.

```js
type COLOR = "red" | "orange" | "yellow" | "green";

let color1: COLOR = "red"; // success
let color2: COLOR = "blue"; // failed 다른 값으로 변경하는 것이 불가능합니다.
```

### Number Types

- 숫자형 리터럴 타입도 사용이 가능합니다. 아래 처럼 사용을 해도 되고 주로 크기와 관련된 값을 설정할 때 사용합니다.

```js
type RETURN_VALUE = -1 | 0 | 1;

function compare(a: number, b: number): RETURN_VALUE {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```

### Boolean Types

```js
type SHOW = true | false;
function isShow(a: number): SHOW {
  return a > 10;
}
```

### Object Type

```js
type myAction =
  | { type: "COUNT", count: number }
  | { type: "EAT", food: string }
  | { type: "READ", book: string };
```

### Function Type

```js
type Func = (() => number) | (() => void);
```

### Interface Type

```js
interface Apple {
  color: string;
  isSweet: boolean;
}

interface Banana {
  color: string;
  isSweet: boolean;
}

interface Orange {
  color: string;
  isSweet: boolean;
}

type Fruit = Apple | Banana | Orange;
```

### Tuple Type

```js
type Tuple = [number, string, boolean];

const t: Tuple = [1, "text", true];
```
