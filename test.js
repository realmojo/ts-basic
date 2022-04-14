const arr = [1, 2, 3];

const iterator = arr[Symbol.iterator](); //Symbol.itrator를 호출합니다.

let item = iterator.next();
do {
  console.log(item);
  item = iterator.next();
  if (item.done === true) {
    console.log(item);
  }
} while (!item.done);
