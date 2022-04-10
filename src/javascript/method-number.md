# 숫자

## toExponential

숫자를 지수 표기법으로 변환합니다.

```js
let number = 10;
console.log(number.toExponential(2)); // 1.00e+1
```

## toFixed

숫자를 고정 소수점 표기법으로 표시합니다.

```js
let number = 12.3456;
console.log(number.toFixed(2)); // 12.35
let number2 = 0.43;
console.log(number2.toFixed(1)); // 0.4
```

## toString

숫자를 문자열로 표기합니다.

```js
let number = 12.3456;
console.log(number.toString()); // 12.3456
console.log(typeof number.toString()); // string
```

## Number.isFinite()

주어진 값이 유한한 수인지 판별합니다.

```js
console.log(Number.isFinite(2 / 0)); // false
console.log(Number.isFinite(10 / 3)); // true
console.log(Number.isFinite(0 / 0)); // false
```

## Number.isInteger()

주어진 값이 정수인지 판별합니다.

```js
console.log(Number.isInteger(-1)); // true
console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(1)); // true
console.log(Number.isInteger(1.2)); // false
```

## Number.isNan()

주어진 값이 NaN(Not a Number)인지 판별합니다.

```js
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(0)); // false
```

## Number.parseFloat()

주어진 값을 문자열로 변환한 후 부동소수점으로 반환합니다.

```js
console.log(Number.parseFloat("4.567fwdadbcd")); // 4.567
```

## Number.parseInt()

주어진 값을 특정 진수의 정수로 변환합니다. 기본값은 10진수 입니다.

```js
console.log(Number.parseInt(1001, 2)); // 9
console.log(Number.parseInt(10, 2)); // 2
console.log(Number.parseInt(100, 10)); // 100
console.log(Number.parseInt("0xf", 16)); // 15
```
