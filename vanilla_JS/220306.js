//조건문

//if, if else
let a = 3;
if (a >= 5) {
  console.log("5 이상입니다.");
} else if (a >= 5 && a <= 7) {
  console.log("5 이상 7 이하 입니다.");
} else {
  console.log("5 미만 입니다.");
}

//switch
let country = "ko";
switch (country) {
  case "ko":
    console.log("한국");
    break;
  case "cn":
    console.log("중국");
    break;
  case "jp":
    console.log("일본");
    break;
  case "uk":
    console.log("영국");
    break;
}

//
//
//

//반복문
console.log("hyejin");
console.log("hyejin");
console.log("hyejin");
console.log("hyejin");

for (let i = 0; i <= 100; i++) {
  //for (초기식; 조건식; 연산)
  console.log("hyejin");
}

//객체순회
let person = {
  name: "hyejin",
  age: 27,
  tall: 169,
};

const personKeys = Object.keys(person);
const personValues = Object.values(person);
