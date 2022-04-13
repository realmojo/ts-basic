# 정규표현식

## exec

`exec` 메소드는 정규표현식을 사용하는 메소드들 중에서 가장 강력한 메소드 입니다. `regexp`를 `string`에 적용해서 일치하는 경우 배열을 반환합니다.
기본 원형은 다음과 같습니다.

```js
regexp.exec(string);
```

정규표현식 객체가 `g` 플래그를 가지는 경우 조금 더 복잡해 집니다. 검색의 시작은 문자열의 0번째 위치부터 시작하는 것이 아니라 `regexp.lastIndex` 값의 위치부터 시작합니다.(초기값은 0) 일치하는 것을 찾게 되면 `regexp.lastIndex` 값은 일치하는 부분 다음에 나오는 첫 글자의 위치로 설정 됩니다. 일치하는 것을 찾지 못하면 `regexp.lastIndex` 값은 0으로 재설정 됩니다.

```js
const regex1 = RegExp("foo*", "g");
const str1 = "table football, foosball";
let array1;

while ((array1 = regex1.exec(str1)) !== null) {
  console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
  // Found foo. Next starts at 9.
  // Found foo. Next starts at 19.
}
```

## test

정규표현식을 사용하는 메소드 가운데 가장 간단하고 가장 빠릅니다. `regexp`가 문자열에 일치하면 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다. `g`플래그와 같이 사용해서는 안됩니다.

```js
const str = "table football";

const regex = new RegExp("foo*");
const globalRegex = new RegExp("foo*", "g");

console.log(regex.test(str)); // true
console.log(globalRegex.lastIndex); // 0
console.log(globalRegex.test(str)); // true
console.log(globalRegex.lastIndex); // 9
console.log(globalRegex.test(str)); // false
```
