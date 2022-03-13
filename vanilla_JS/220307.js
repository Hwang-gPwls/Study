//Truthy & Falsy

let a = ""; // "string", [], int, (), Infinity => Truthy
let b = null; //undefined, 0, -0, NaN, ""

if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
} // FALSE

const getName = (person) => {
  if (!person) {
    return "객체가 아닙니다.";
  }
  return person.name;
};

//let person = { name: "황혜진" };
let person = "null";
const name = getName(person);
console.log(name);

//
//
//

//삼항 연산자
let a = 3;
if (a >= 0) {
  console.log("양수");
} else {
  console.log("음수");
}

a >= 0 ? console.log("상수") : console.log("음수");

let b = [];
const arrayStatus = b.length === 0 ? "빈 배열" : "안 빈 배열";

let c;
const result = c ? true : false;
console.log(result);

//학점 계산 프로그램
// 90점 이상 A+
let score = 100;

score >= 90
  ? console.log("A+")
  : score >= 50
  ? console.log("B+")
  : console.log("F"); //중첩 삼항 연산자는 가독성이 떨어지므로 if문으로 바꾸는 것이 좋음

//
//
//

//단락회로 평가 => 뒤에값을 평가할 필요없이 종료
console.log(false && true);

const getName = (person) => {
  const name = person && person.name; // null
  return name || "객체가 아닙니다.";
};

let person = { name: "이정환" };
const name = getName(person);
console.log(name);

//
//
//

//조건문 업그레이드
// case 1
function isKoreanFood(food) {
  if (["불고기", "떡볶이", "비빔밥"].includes(food)) {
    return true;
  }
  return false;
}

const food1 = isKoreanFood("불고기");
const food2 = isKoreanFood("파스타");
console.log(food1);

//case 2
const meal = {
  한식: "불고기",
  중식: "멘보샤",
  일식: "초밥",
  양식: "파스타",
};

const geMeal = (mealType) => {
  return meal[mealType] || "굶기";
};

console.log("불고기");
console.log("파스타");
