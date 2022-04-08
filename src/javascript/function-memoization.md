# 메모이제이션(memoization)

함수는 불필요한 작업을 피하기 위해서 이전에 연산한 결과를 저장하고 있는 객체를 사용할 수 있습니다. 이러한 최적화 기법을 메모이제이션, 캐시 라고 불립니다. 자바스크립트의 객체와 배열은 메모이제이션에 매우 유용합니다.

가장 유명한 피보나치 수열을 재귀 함수로 계산하는 경우를 생각해보겠습니다. 피보나치 수열에서 한 항의 값은 앞선 두 항의 값을 더한 값 입니다.

```js
let fibonacci = function (n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};
for (let i = 0; i < 11; i++) {
  console.log(`fivonacci(${i}): ${fibonacci(i)}`);
}
// fivonacci(0): 0
// fivonacci(1): 1
// fivonacci(2): 1
// fivonacci(3): 2
// fivonacci(4): 3
// fivonacci(5): 5
// fivonacci(6): 8
// fivonacci(7): 13
// fivonacci(8): 21
// fivonacci(9): 34
// fivonacci(10): 55
```

위의 예제는 잘 동작 합니다. 하지만 처리해야 하는 작업이 눈에는 보이지 않지만 많습니다. `fibonacci`함수를 453번 호출 합니다. 여기서 11번은 직접 호출을 하고 나머지 442번은 이미 계산한 값들을 다시 계산하기 위해 호출한 횟수 입니다. `fibonacci`함수에서 메모이제이션을 적용하면 작업량을 현저하게 줄일 수 있습니다.

이전에 작업한 결과는 클로저를 통해 숨겨지는 memo라는 배열에 저장합니다. 함수가 호출되면 제일 먼저 결과값이 있는지 확인을 한후 결과값이 있으면 연산을 수행하지 않고 결과를 반환합니다.

```js
let fibonacci = (function () {
  let memo = [0, 1];
  let fib = function (n) {
    let result = memo[n];
    if (typeof result !== 'number') {
      result = fib(n - 1) + fib(n - 2);
      memo[n] = result;
    }
    return result;
  };
  return fib;
})();

for (let i = 0; i < 11; i++) {
  console.log(`fivonacci(${i}): ${fibonacci(i)}`);
}
// fivonacci(0): 0
// fivonacci(1): 1
// fivonacci(2): 1
// fivonacci(3): 2
// fivonacci(4): 3
// fivonacci(5): 5
// fivonacci(6): 8
// fivonacci(7): 13
// fivonacci(8): 21
// fivonacci(9): 34
// fivonacci(10): 55
```

위의 예제는 **앞의 함수와 같은 결과값을 보이지만 호출은 단 29번만 하게되고 11번은 직접호출을 하고 나머지 18번은 메모이제이션 결과를 얻기위해 호출한 것입니**다. 즉 메모이제이션 작업은 메모이제이션 함수를 만들 수 있게 도와주는 함수를 만들어서 일반화할 수 있습니다.
