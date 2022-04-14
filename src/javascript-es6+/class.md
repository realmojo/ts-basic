# Class

ES5의 자바스크립트에서는 클래스를 구현할 수 없었습니다. 클래스를 구현하기 위해서 `prototype`의 개념을 알아야했고 비슷하게 나마 모듈패턴으로 클래스의 방식을 구현할 수 있었습니다. 하지만 ES6에서는 `class` 문법이 채택되면서 객체지향적 프로그래밍이 가능하게 되었습니다. 클래스는 프로토타입의 상속, 슈퍼호출, 인스턴스 및 정적 메서드, 생성자 등을 지원합니다.

```js
// ES5 Module Pattern
var User = function () {
  var name = "Kim";
  var age = 34;

  return {
    getName() {
      return name;
    },
    getAge() {
      return age;
    },
  };
};
console.log(User().getName()); // Kim

// ES6 Class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}

let user = new User("Kim", 34);
console.log(user.getName()); // Kim
```

## 클래스의 상속

```js
class Human {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Developer extends Human {
  constructor(name, skills) {
    super(name);
    this.skills = skills;
  }
  show() {
    console.log(`My name is ${this.name}. I am familiar with ${this.skills}`);
  }
}

const Damo = new Developer("Damo", "Javascript");
Damo.show(); // My name is Damo. I am familiar with Javascript
```
