# Promise

Promise는 약속 이행이란 뜻을 가지고 있으며 비동기 연산이 종료된 이후에 결과 값과 실패 사유를 처리하기 위한 처리기를 연결할 수 있습니다. 프로미스를 사용하면 비동기처리를 동기 메소드처럼 반환할 수 있습니다. 최종 결과를 반환하는 것은 아니고 미래의 어떤 시점에 내가 결과를 제공하겠다는 뜻입니다.

프로미스는 세 가지의 상태를 가집니다.

- Pending: 이행하지도 거부하지도 않은 상태
- Fulfiled: 연산이 성공적으로 완료
- Rejected: 연산이 실패

```js
let response = new Promise((resolve, reject) => {
  let random = Math.round(Math.random(0, 1));
  if (random) {
    setTimeout(() => {
      resolve({ code: 200, message: "OK" }); // sucess
    }, 1000);
  } else {
    reject({ code: 500, message: "Internal Error" }); // failed
  }
});

// 약속이 끝나지 않았음을 의미 하기에 Pending처리로 나옵니다.
console.log(data); // <Pending>

response
  .then((res) => {
    // resolve
    console.log(res); // { code: 200, message: "OK" }
  })
  .catch((e) => {
    // reject
    console.log(e); // { code: 500, message: "Internal Error" }
  });
```

비동기적인 코드는 실무를 하면서 흔하게 사용하는 사례 입니다. 이후에 ES8에서 `async/await`하고 `promise`를 같이 사용하는 경우가 많습니다.

<img src="../.vuepress/assets/images/javascript-es6-promise.png" style="width:100%" />
<div style="text-align:center"><small>Promise 흐름도 - MDN</small></div>
