# async/await

`async/await`는 비동기적인 코드를 동기적으로 보이기 위하여 나온 ES8의 문법 입니다. `promise`와 같이 자주 사용됩니다.

```js
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: "ok" });
    }, 1000);
  });
}

async function getItems() {
  let response = await getData();
  console.log(response);
}

getItems();
```

## loop 문 안에서 사용하기

잘못된 예 처럼 사용을해도 프로그램상 오류는 나지 않지만 `eslint`가 적용되어 있다면 통과를 못 시킬 것입니다. 기본적으로 `loop`문 안에서는 `await`를 사용하지 않는 것이 권고사항입니다. 그 이유는 `await`구문이 너무 오래걸려서 계속 기다려야 하는 경우 프로그램이 멈춤현상이 발생할 수도 있기 때문입니다. 그렇기 때문에 올바른 예처럼 임시 배열을 하나 만든 다음에 결과값을 받고 전부 다 완료가 되면 한 번에 조회하는 식으로 코드를 발전해 나가야 합니다.

- 잘못된 예

```js
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: "ok" });
    }, 1000);
  });
}

async function getItems() {
  for (let i = 0; i < 5; i++) {
    let response = await getData();
    console.log(response);
  }
}

getItems();
```

- 올바른 예

```js
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: "ok" });
    }, 1000);
  });
}

async function getItems() {
  let temp = [];
  for (let i = 0; i < 5; i++) {
    let response = getData();
    temp.push(response);
  }

  const d = await Promise.all(temp);
  console.log(d);
}

getItems();
```
