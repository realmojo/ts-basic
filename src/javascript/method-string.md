# 문자열

## charAt

문자열에서 특정 인덱스에 위치하는 문자열 값을 반환합니다.

```js
let str = "string";

console.log(str.charAt(1)); // t
console.log(str.charAt(4)); // n
```

## charCodeAt

문자열에서 특정 인덱스에 위치하는 문자열의 [아스키코드값](https://www.asciitable.com)을 반환합니다.

```js
let str = "string";

console.log(str.charCodeAt(1)); // 116
console.log(str.charCodeAt(4)); // 110
```

<img src="../.vuepress/assets/images/method-string-ascii.png" style="width:100%" />

## concat

매개변수로 전달된 모든 문자열을 호출 문자열에 붙인 새로운 문자열을 반환합니다.

```js
let str1 = "hello";
let str2 = "world";
console.log(str1.concat(" ", str2)); // hello world
```

## endsWith

어떤 문자열에서 특정 문자열로 끝나는지 판별이 가능합니다. `boolean`값으로 반환합니다. 두 번째 매개변수는 끝의 위치를 선택할 수 있습니다.

```js
let str = "this is string";
console.log(str.endsWith("ring")); // true
console.log(str.endsWith("str")); // false
console.log(str.endsWith("str", 11)); // true
```

## includes

어떤 문자열에서 특정 문자열이 포함되어 있는지 판별이 가능합니다. `boolean`값으로 반환합니다. 두 번째 매개변수는 찾기 시잘할 위치를 선택할 수 있습니다.

```js
let str = "this is string";
console.log(str.endsWith("this")); // true
console.log(str.endsWith("rts")); // false
```

## indexOf

호출한 문자열객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환 합니다. 없으면 `-1`을 반환합니다.

```js
let str = "this is string";

console.log(str.indexOf("is")); // 2
console.log(str.indexOf("str")); // 8
```

## lastIndexOf

호출한 문자열객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환 합니다. 없으면 `-1`을 반환합니다.

```js
let str = "this is string";

console.log(str.lastIndexOf("is")); // 5
console.log(str.lastIndexOf("str")); // 8
```

## localeCompare

문자열과 문자열을 비교하고 정렬순서에 따른 값을 `-1`, `0`, `1` 반환

```js
let a = "a";
let b = "b";
let c = "c";

console.log(a.localeCompare(b)); // -1
console.log(a.localeCompare(a)); // 0
console.log(c.localeCompare(a)); // 1
```

## match

문자열에서 정규식과 매치되는 부분을 검색합니다.

```js
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let regexp = /[A-E]/gi;
console.log(str.match(regexp)); // ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

## padEnd

문자열에 길이만큼 특정 문자를 뒤에 채웁니다. 기본값은 공백입니다.

```js
let str = "str";

// 총 10칸의 크기 중 나머지 길이를 . 으로 작성합니다.
console.log(str.padEnd(10, ".")); // 10.......
```

## padStart

문자열에 길이만큼 특정 문자를 앞에 채웁니다. 기본값은 공백입니다.

```js
let str1 = "5";

console.log(str1.padStart(2, "0")); // 05

let fullNumber = "2034399002125581";
let last4Digits = fullNumber.slice(-4);
let maskedNumber = last4Digits.padStart(fullNumber.length, "*");

console.log(maskedNumber); // ************5581
```

## repeat

문자열을 입력한 매개변수 만큼 반복하여 새로운 문자열을 반환합니다.

```js
let str = "OK ";
console.log(str.repeat(5)); // OK OK OK OK OK
```

## replace

문자열을 다른 문자열로 대체 합니다.

```js
let str = "OK";
console.log(str.replace("O", "")); // O
```

## replaceAll

문자열을 다른 문자열로 대체 합니다. 일부 브라우저에서 호환이 되지 않으니 `Babel` 혹은 `Regex`을 이용하여 새로 함수를 만드는 것이 더 좋습니다.

```js
let str = "OKOOO";
console.log(str.replaceAll("O", "")); // O
```

## search

문자열에서 정규표현식과 일치하는 문자의 인덱스를 반환합니다.

```js
let str = "hey JudE";
let re = /[A-Z]/g;
console.log(str.search(re)); // 4
```

## slice

문자열의 일부를 추출하여 새로운 문자열을 반환합니다. 음수일 경우에는 뒤에서 부터 시작합니다.

```js
let str = "this is string";

console.log(str.slice(3)); // s is string
console.log(str.slice(3, 7)); // s is
console.log(str.slice(-6)); // string
console.log(str.slice(-6, -3)); // str
```

## split

특정 구분자를 이용하여 문자열을 배열로 변환합니다.

```js
let str = "this is string";
console.log(str.split(" ")); // ["this", "is", "string"]
```

## startsWith

어떤 문자열에서 특정 문자열로 시작하는 판별이 가능합니다. `boolean`값으로 반환합니다. 두 번째 매개변수는 시작 위치를 선택할 수 있습니다.

```js
let str = "this is string";
console.log(str.startsWith("ring")); // false
console.log(str.startsWith("this")); // true
console.log(str.startsWith("is", 2)); // true
```

## substr

문자열의 특정 위치에서 시작하여 특정 문자 수 만큼 반환합니다. 두 번째 매개변수의 기본값은 전체 입니다.

```js
let str = "Mozilla";

console.log(str.substr(1, 2)); // oz
console.log(str.substr(2)); // zilla
```

::: warning 주의사항
아직 deprecated 된건 아니지만 본 부록이 포함한 모든 언어 기능과 행동은 하나 이상의 바람직하지 않은 특징을 갖고 있으며 사용처가 없어질 경우 명세에서 제거될 것입니다. [참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substr)
:::

## substring

문자열의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다.

```js
let str = "Mozilla";

console.log(str.substr(1, 3)); // ozi
console.log(str.substr(2)); // zilla
```

## toLowerCase

문자열을 소문자로 변환합니다.

```js
let str = "ABC";
console.log(str.toLowerCase()); // abc
```

## toUpperCase

문자열을 대문자로 변환합니다.

```js
let str = "abc";
console.log(str.toUpperCase()); // ABC
```

## trim

문자열을 앞뒤 공백을 제거합니다.

```js
let str = "  abc  ";
console.log(str.trim()); // abc
```

## trimStart

문자열을 앞 공백을 제거합니다.

```js
let str = "  abc  ";
console.log(str.trimStart()); // "abc  "
```

## trimEnd

문자열을 뒤 공백을 제거합니다.

```js
let str = "  abc  ";
console.log(str.trimEnd()); // "  abc"
```
