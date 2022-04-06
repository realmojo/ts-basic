# 인터페이스

## 인터페이스 개념

인터페이스는 타입을 정의하기 위해 사용이 되어지며 서로간의 **약속**을 의미합니다. 변수, 함수, 클래스 등에 사용이 되며 Typer과 마찬가지로 새로운 타입을 정의하는 부분에서는 비슷합니다. 또한 일관성을 유지하게 해주기 때문에 소스코드를 분석할 때 용이하게 작업을 할 수 있습니다.

또한 관례상 명칭을 정의할 때 I 붙이기도 하는데 필수요건은 아니다. 개발자들 사이에서 I로 시작하는 것은 인터페이스라고 암묵적 동의를 하기위해 만들어진 규칙이다.

```js
interface IPerson {
  name: string;
  age: number;
  gender: string;
  country: string;
}
```

## 변수 인터페이스

변수에 새로운 타입을 추가하여 정의하는 것 입니다.

```js
interface User {
  id: number;
  nickname: string;
  profileImage: string;
  isDelete: boolean;
}

let user: User = {
  id: 1,
  nickname: "strikers1999",
  profileImage: "../profile/image.png",
  isDelete: false,
};
```

## 함수 인터페이스

함수의 타입으로도 인터페이스 구현이 가능합니다.

```js
interface MathPow {
  (num: number): number;
}

const mathPow: MathPow = function (num: number) {
  return num * num;
};
```

## 클래스 인터페이스 상속

클래스에서 인터페이스를 사용해야 할 경우에는 `implements`키워드를 이용하여 상속을 받는다.

```js
interface User {
  name: string;
  age: number;
}

class Member implements User {
  constructor(
    public name:string,
    public age: number,
  ){}
}

```

::: warning 주의사항
`implements`로 상속을 받았을 경우에는 클래스에서 인터페이스 속성을 모두 구현해주어야 합니다. 그렇지 않을 경우 오류를 출력합니다.
:::

## 옵셔널 프로퍼티

인터페이스로 구현한 속성중에서 선택적으로 사용해야 하는 경우 변수 옆에 `?`를 붙여서 사용

```js
interface User {
  name: string;
  age: number;
  profileImage?: string;
}

let user: User = {
  name: "damo",
  age: 34,
};

console.log(user.name);
```

## 읽기전용 프로퍼티

인터페이스로 구현한 속성 중에서 선언을 한 후에 변경을 하지 못하도록 하는 키워드 입니다. 변수 좌측에 `readonly`를 선언해 주면 됩니다.

```js
interface User {
  readonly name: string;
  age: number;
}

let user: User = {
  name: "damo",
  age: 34
}
user.name = "camo"; // Cannot assign to 'name' because it is a read-only property.(2540)
```

## 덕 타이핑

타입스크립트는 인터페이스에서 정의한 속성이나 메소드를 가지고 있으면 인터페이스라고 인정하기도 합니다. 이를 `덕 타이핑`, `구조적 타이핑`이라고 불립니다.

```js
// -> 1
interface User {
  name: string;
  age: number;
}

// -> 2
const printUser = (user: User): void => {
  console.log(`${user.name}, ${user.age}`);
};

// -> 3
const my = { name: "damo", age: 34 };

// -> 4. damo, 34
printUser(my);
```

1. User 인터페이스를 정의 하였습니다.
2. printUser 함수에 User 인터페이스 인자 값을 받아오는 함수를 구현 하였습니다.
3. my 변수에 User 인터페이스가 아닌 일반 객체에 User 인터페이스와 동일한 속성으로 선언 하였지만
4. 정상적으로 출력이 되는 것을 확인 할 수 있습니다.

## 인터페이스 상속

인터페이스는 다른 인터페이스를 상속 받아서 사용할 수 있습니다. 상속 받은 인터페이스는 모든 속성을 정의 해야 합니다.

```js
interface Person {
  name: string;
  age: number;
  gender: string;
  country: string;
}

interface Job extends Person {
  category: string;
  skill: string[];
  salary: number;
}

const Human: Job = {
  name: "Ted",
  age: 33,
  gender: "female",
  country: "KR",
  category: "Software Engineer",
  skill: ["HTML", "CSS", "Javascript"],
  salary: 30000,
};

console.log(Human.name);
```

## 타입, 인터페이스 차이

::: tip
얼핏 보면 type과 interface는 크게 차이가 나지 않아 보입니다. 하지만 결정적으로 다른 한가지는 상속 입니다. 인터페이스의 경우에는 extends의 키워드를 이용하여 다른 인터페이스를 `상속` 받을수가 있으며 타입은 그 자체로만 사용이 됩니다.
:::
