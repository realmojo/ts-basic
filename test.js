let user = {
  name: "Kim",
  age: 34,
};

let data = 40;
Object.defineProperty(user, "skill", {
  enumerable: true,
  get() {
    console.log("data get");
    return data;
  },
  set(newValue) {
    console.log("data set");
    data = newValue;
  },
});

user.skill = "Javascript";
console.log(user.skill);
console.log(user);
