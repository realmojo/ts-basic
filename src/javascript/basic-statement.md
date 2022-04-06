# 문장

## 변수 선언문

`var`, `let`, `const` ES6 문법에서는 주로 `let`, `const`를 많이 사용합니다.

```js
var a = "text";
let b = "text";
const c = "text";
```

## 조건문

- 조건 값으로 분기처리를 할 때

```js
if (조건) {
  /* */
} else if (조건) {
  /* */
} else {
  /* */
}
```

- 조건 값으로 분기처리를 하나 조건 값이 특정 값이 있는 경우

```js
switch(value) {
	case: 0
		/* */
		break;
	case: 1
		/* */
		break;
	default:
		/* */
}


```

다음 조건은 모두 거짓입니다.

- `false`
- `null`
- `undefined`
- `""`
- `''`
- `0`
- `NaN`

## 반복문

- 특정 구문을 반복적으로 실행해야 할 경우

```js
for (let i = 0; i < 10; i++) {
  /* 
		10 번 실행
	*/
}
```

- 특정 조건이 거짓일 때까지 반복적으로 실행(선 조건, 후 실행)

```js
while (조건) {
  /*
		조건이 거짓일 경우에만 while문을 벗어남
	*/
}
```

- 선 실행, 후 조건 판별함. 조건이 거짓일 경우 while문을 벗어남

```js
do {
  /*
		선 실행 후 조건 판별, 조건이 거짓일 경우 while문을 벗어남
	*/
} while (조건);
```

## 예외처리

- 코드 동작 도중 오류가 났을 경우를 대비하여 작성하는 코드

```js
try {
  /*
		구문을 작성
	*/
  // 오류를 일으키고 싶은 경우 아래와 같이 작성
  throw new Error("error message");
} catch (e) {
  console.log(e.message);
}
```
