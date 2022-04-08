# 기본 타입에 기능 추가

자바스크립트는 언어의 기본 타입에 기능을 추가하는 것을 허용합니다. `Object.prototype`에 메소드를 추가하면 모든 객체에서 이 메소드를 사용이 가능합니다. 이러한 작업은 함수, 배열, 문자열, 숫자, 정규 표현식, 불리언 모두 유효합니다.

예를 들어 다음과 같이 `method`라는 메소드를 `Function.prototype`에 추가하게 되면 이후 모든 함수에서 이 메소드를 사용할 수 있습니다.

```js
Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};
```

이와 같이 method라는 메소드를 Function.prototype에 추가함으로써 앞으로는 Function.prototype에 메소드를 추가할 때 prototype이라는 속성 이름을 사용할 필요가 없습니다. 이로인해 코드를 다소 보기 안 좋게 하는 부분이 사라집니다.

자바스크립트에는 따로 구분된 정수형이 없어서 때떄로 숫자형에서 정수 부분만 추출해야 하는 경우가 있습니다. 그런데 이러한 작업을 위해 자바스크립트가 제공하는 방법은 용이하지 않습니다. 다음의 예처럼 Number.prototype에 integer라는 메소드를 추가해서 해결할 수 있습니다. 이 메소드는 숫자의 부호에 따라 Math.ceil, Math.floor를 사용합니다.

```js
Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};
Number.method('integer', function () {
  return Math[this < 0 ? 'ceil' : 'floor'](this);
});
console.log((-10 / 3).integer()); // -3
```

기본 타입의 프로토타입은 public 구조입니다. 그러므로 라이브러리들을 섞어서 사용할 때는 주의가 필요합니다. 한 가지 방어적인 코드는 존재하지 않은 메소드만 추가하는 것 입니다.

```js
Function.prototype.method = function (name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
};
```
