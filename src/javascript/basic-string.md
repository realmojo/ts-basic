# 문자열

문자열은 작은 따옴표(`'`)나 큰 따옴표(`"`)로 묶어서 나타냅니다. 따옴표 안에는 문자 0개 이상이 있어야 합니다. `\` 역슬래시는 이스케이프 문자 입니다. 자바스크립트는 유니코드가 16비트 문자 Set 이었을 때 개발이 되어졌으므로 자바스크립트 내의 모든 문자는 16비트 유니코드 입니다.

```js
console.log("A" === "\u0041"); // true
```

문자열은 length라는 속성이 있습니다. `"five".length` 의 값은 4 입니다. 문자열은 변하지 않습니다. 일단 문자열이 한 번 만들어지면 이 문자열은 변할 수 없습니다. 여러 문자열은 `+` 연산자를 이용하여 새로운 문자열을 만들 수 있습니다.

```js
console.log("A" + "B" + "C" === "ABC"); // true
```