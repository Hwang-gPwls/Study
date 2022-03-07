//비 구조화 할당
//배열
let arr = ["one", "two", "three"];

let one = arr[0];
let two = arr[1];
let three = arr[2];

let [one, two, three] = arr;
let [one2, two2, three2, four = "four"] = ["one", "two", "three"]; // four는 undefined => 기본값 지정 가능

console.log(one, two, three);

//swap
let a = 10;
let b = 20;
let temp = 0;
[a, b] = [b, a];

//객체 => key값 기준
let object = { one: "one", two: "two", three: "three" };

let one = object.one;
let two = object.two;

let { one, two, three: myName, abc = "abc" } = object;

//
//
//

//spread
//객체
const cookie = {
  base: "cookie",
  madeIn: "korea",
};

const chocochipCookie = {
  ...cookie,
  toping: "chocochip",
};

const blueberryCookie = {
  ...cookie,
  toping: "blueberry",
};

const strawberryCookie = {
  ...cookie,
  toping: "strawberry",
};
console.log(chocochipCookie);

//배열
const noTopingCookies = ["촉촉한쿠키", "안촉촉한쿠키"];
const topingCookies = ["블루베리쿠키", "딸기쿠키", "초코칩쿠키"];

const allCookies = [...noTopingCookies, ...topingCookies, "함정쿠키"];
console.log(allCookies);
