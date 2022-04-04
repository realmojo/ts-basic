# 인터페이스

## 인터페이스

```js
interface IPerson {
  name: string;
  age: number;
  gender: string;
  country: string;
}
```

## 인터페이스 상속

```js
interface IPerson {
  name: string;
  age: number;
  gender: string;
  country: string;
}

interface Job extends IPerson {
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
얼핏 보면 type과 interface는 크게 차이가 나지 않아 보입니다. 하지만 결정적으로 다른 한가지는 상속 입니다. 인터페이스의 경우에는 extends의 키워드를 받아 다른 인터페이스를 `상속` 받아서 사용을 할 수가 있으며 타입은 그 자체로만 사용이 됩니다.
:::
