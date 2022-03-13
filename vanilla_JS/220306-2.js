//함수
//함수는 기능
let count = 1; //전역변수

function getArea(width, heidth) {
  let area = width * heidth; //함수 내부의 지역변수는 외부에서 접근할 수 없음
  return area;
  console.log(area);
} //함수 선언식, 함수 선언 방식의 함수 생성

let area1 = getArea(100, 200); // 함수 실행종료 전까지 다음 줄 실행 하지 않음
getArea(200, 200);
getArea(150, 200);
getArea(1000, 200);
getArea(1234, 4400);

console.log("함수 설정 완료");

//
//
//

//함수표현식 & 화살표 함수
console.log(helloB); // 호이스팅

let helloA = function () {
  return "안녕하세요";
}; // 함수 표현식

let helloArrow = () => {
  return "안녕하세요";
}; // 화살표 함수

function helloB() {
  return "안녕하세요";
} // 함수 선언식

const helloText = hello();
console.log(hello);

//
//
//

//콜백함수
function checkMood(mood, goodCallback, badCallback) {
  if (mood === "good") {
    goodCallback();
  } else {
    badCallback();
  }
}

function cry() {
  console.log("ACTION :: CRY");
}

function sing() {
  console.log("ACTION :: SING");
}

function dance() {
  console.log("ACTION :: DANCE");
}

checkMood("sad", sing, cry);
