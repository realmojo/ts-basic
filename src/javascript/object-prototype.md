# 프로토타입

모든 객체는 속성을 상속하는 프로토타입 객체에 연결되어 있습니다. 객체 리터럴로 생성되는 모든 객체는 자바스크립트의 표준 객체인 Object의 속성인 prototype(Object.prototype) 객체에 연결됩니다.

```js
let a = {}
console.log(a)

// 출력결과
{}
 -> [[Prototype]]: Object
 -> constructor: ƒ Object()
 -> hasOwnProperty: ƒ hasOwnProperty()
 -> isPrototypeOf: ƒ isPrototypeOf()
 -> propertyIsEnumerable: ƒ propertyIsEnumerable()
 -> toLocaleString: ƒ toLocaleString()
 -> toString: ƒ toString()
 -> valueOf: ƒ valueOf()
 -> __defineGetter__: ƒ __defineGetter__()
 -> __defineSetter__: ƒ __defineSetter__()
 -> __lookupGetter__: ƒ __lookupGetter__()
 -> __lookupSetter__: ƒ __lookupSetter__()
 -> __proto__: (...)
 -> get __proto__: ƒ __proto__()
 -> set __proto__: ƒ __proto__()
```

객체를 생성할 때는 해당 객체의 프로토타입이 될 객체를 선택할 수 있습니다. 이를 위해 자바스크립트가 제공하는 메커니즘은 까다롭고 복잡하지만 조금만 신경을 쓰면 매우 단순화 할 수 있습니다.
이제 `Object`객체에 `create`라는 메소드를 추가해 보겠습니다. `create`는 넘겨받은 객체를 프로토타입으로 하는 새로운 객체를 생성하는 메소드 입니다.

```js
let user = {
  name: 'Kim',
};

if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    let F = function () {};
    F.prototype = o;
    return new F();
  };
}
let another = Object.create(user);
console.log(another.name);
```

프로토타입의 연결은 값의 갱신에 영향을 받지 않습니다. 객체를 변경하더라도 객체의 프로토타입에는 영향을 미치지 않습니다.

프로토타입의 연결은 오로지 객체의 속성을 읽을 때만 사용합니다. 객체에 있는 특정 속성의 값을 읽으려고 하는데 해당 속성이 객체에 없는 경우 자바스크립트는 이 속성을 프로토타입 객체에서 찾으려고 합니다. 이러한 시도가 바로 `프로토타입 체인`이라고 불리우며 가장 마지막에 있는 Object.prototype까지 계속해서 이어집니다. 찾으려는 속성이 프로토타입 체인 어디에도 없는 경우 `undefined`를 반환합니다.
