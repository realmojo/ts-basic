# 모듈

함수와 클로저를 사용해서 모듈을 만들 수 있습니다. 모듈은 내부의 상태나 구현 내용은 숨길수 있고 인터페이스만 제공을 하는 함수 혹은 객체 입니다. 모듈을 구현하기 위해서 함수를 사용하면 전역변수 사용을 거의 대부분 제거할 수 있기 때문에 결국 자바스크립트의 최대 약점 중 하나를 보완할 수 있습니다.

다음은 모듈패턴으로 구현한 자바스크립트 입니다.

```js
let User = (function () {
  let that = this;
  let name = '';
  let age = 0;

  return {
    setName: function (name) {
      that.name = name;
    },
    getName: function () {
      return that.name;
    },
  };
})();
User.setName('Kim');
console.log(User.getName()); // Kim
```

모듈의 일반적인 패턴은 `private` 변수와 함수를 정의하는 함수 입니다. 클로저를 통해 `private` 변수와 함수에 접근할 수 있는 권한이 있는 함수를 생성하고 이 함수를 반환하거나 접근 가능한 장소에 이를 저장하는 것입니다.

::: tip
`let that = this;`구문을 왜 저렇게 사용하는지 궁금하시다면 [함수 호출패턴](http://localhost:8080/javascript/function-call.html#%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE-%E1%84%92%E1%85%A9%E1%84%8E%E1%85%AE%E1%86%AF-%E1%84%91%E1%85%A2%E1%84%90%E1%85%A5%E1%86%AB)을 참고하시기 바랍니다.
:::

모듈패턴을 사용하면 전역변수 사용을 없앨 수 있으며 이 패턴은 정보은닉과 그 외 다른 좋은 설계 방식을 따를 수 있게 하고 애플리케이션이나 다른 싱글톤 패턴들을 효과적으로 캡슐화할 수 있게 합니다.
