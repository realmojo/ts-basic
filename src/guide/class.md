# 클래스

## readonly

readonly 키워드는 속성을 조회 용도로만 사용합니다. 변수를 변경하려고 하면 오류가 납니다.

```js
class User {
  readonly Id: number;
  constructor(initID: number) {
    this.Id = initID
  }
}

const Member = new User(1223);
console.log(Member.Id); // 1223
Member.Id = 332; // Cannot assign to 'Id' because it is a read-only property.(2540)
```

## abstract

추상 클래스 혹은 추항 메소드는 다른 클래스의 기반이 되는 것을 의미 합니다. 추상 클래스를 통하여 상속(extends)받은 클래스는 반드시 추상 메소드를 구현해야 합니다.

```js
abstract class Animal {
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bow");
  }
}

const dog = new Dog();
dog.makeSound();
```

## extends vs implements

두 키워드 모두 클래스에서 상속을 받는 키워드 입니다. 하지만 용도에 따라 다르게 사용이 됩니다.

**extends**
extends는 클래스에서 클래스, 인터페이스에서 인터페이스를 상속받을 때 사용합니다. 클래스의 경우에는 상속받은 객체는 상위 객체의 속성을 구현해도 되고 안해도 됩니다. 인터페이스의 경우에는 상속받은 속성을 모두 구현해야 합니다.

```js
class Car {
  move() {
    console.log("car moving");
  }
}

class BMW extends Car {
  getColor() {
    console.log("bmw color is black");
  }
}

const myBMW = new BMW();
myBMW.move(); // parent class method
myBMW.getColor(); // child class method
```

```js
interface Animal {
  species: string;
}

interface Dog extends Animal {
  age: number;
}

let myDog: Dog = {
  species: "Bulldog",
  age: 2,
};
console.log(myDog.species); // Bulldog
console.log(myDog.age); // 2
```

**implements**
implements는 인터페이스를 상속받을 때 사용합니다. 상속받은 클래스에서 인터페이스의 속성을 모두 구현해야 합니다.

```js
interface Car {
    name: string;
    color: string;
}
class BMW implements Car {
    constructor(
        public name: string,
        public color: string
    ){}
}

const myBMW = new BMW("bmw", "black");
console.log(myBMW.name);
console.log(myBMW.color);
```

|      | Extends                      | Implements                                |
| ---- | ---------------------------- | ----------------------------------------- |
| 사용 | 클래스를 상속 받는 경우      | 새로운 클래스와 동일하게 만들고 싶은 경우 |
| 정의 | 부모로 부터 필요한 것만 정의 | 상속받은 속성 전부다 정의                 |
