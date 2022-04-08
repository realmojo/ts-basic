# 클로저

유효범위에 관한 좋은 내용 중 하나는 내부 함수에서 자신을 포함하고 있는 외부함수의 매개변수와 변수들을 접근할 수 있습니다. 이러한 특성은 매우 유용합니다. 아래의 예제에서 `value`라는 속성과 `increment`라는 메소드를 가진 `myObject`를 살펴보겠습니다. `myObject`를 객체 리터럴로 초기화하는 대신에 다음에 나오는 코드처럼 객체를 반환하는 함수를 호출한다고 보겠습니다.

이렇게 하면 `increment`와 `getValue`를 통해 `value`라는 변수에 접근할 수 있지만 함수 유효범위 때문에 프로그램의 나머지 부분에서는 접근할 수가 없습니다.

```js
let myObject = (function () {
  let value = 0;

  return {
    increment: function (inc) {
      value += typeof inc === 'number' ? inc : 1;
    },
    getValue: function () {
      return value;
    },
  };
})();
myObject.increment(2);
myObject.getValue(); // 2
```

코드를 잘 살펴보면 `myObject`에 함수를 할당한 것이 아니라 함수를 호출한 결과를 할당하고 있습니다. 맨 마지막 줄에 있는 `()`를 유의깊게 봐야하는데 함수는 메소드 두개를 가진 객체를 반환하며 이 두 메소드는 계속해서 `value`라는 변수에 접근할 수 있습니다.

다른 예제를 하나 더 보겠습니다.

```js
let user = function (name) {
  return {
    getName: function () {
      return name;
    },
  };
};

let myUser = user('Kim');
console.log(myUser.getName());
```

`user`함수는 `new` 키워드 없이 사용하게 설계되었습니다. 그래서 이름도 대문자로 표기하지 않았습니다. `user`를 호출하면 `getName` 메소드가 있는 객체를 반환합니다. 이 객체에 대한 참조는 `myUser`에 저장됩니다. `getName` 메소드는 `user`가 이미 반환된 뒤에도 `user`의 `name`에 계속해서 접근할 수 있는 권한을 가지게 됩니다.

`getName`은 `name` 매개변수의 복사본에 접근할 수 있는 권한을 갖는 것이 아니라 매개변수 그 자체에 대한 접근 권한을 가지는 것입니다. 이러한 것이 가능한 것은 함수가 자신이 생성된 함수, 즉 자신을 내포하는 함수의 문맥`(context)`에 접근할 수 있기 때문입니다. 이러한 것을 클로저`(closure)`라고 부릅니다.
