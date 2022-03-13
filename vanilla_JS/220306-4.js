//배열
let arr = [1, 2, 3, 4, 5]; //배열 리터럴
let arr2 = new Array();

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

arr.push(5); // 배열에 값 추가

console.log(arr.length); // 배열도 객체

//배열 내장 함수
arr.forEach((elm) => elm * 2); //배열순환

const newArr = arr.map((elm) => {
  return elm * 2;
}); //연산 후 새로운 배열 반환

let number = 5;
console.log(arr.includes(number)); // 주어진 배열에서 인자로 받을 값이 존재하는지 확인
console.log(arr.indexOf(number)); // 주어진 배열의 값이 몇 번째 인덱스에 존재하는지 (없을 경우 -1)

const color = [
  { color: "red" },
  { color: "black" },
  { color: "blue" },
  { color: "green" },
];

const color2 = [
  { color: "red" },
  { color: "black" },
  { color: "blue" },
  { color: "green" },
];

const idx = color.findIndex((elm) => {
  return elm.color === "blue";
}); // 원하는 배열 요소의 index 찾기, 요소 자체이면 find 사용

console.log(color.filter((elm) => elm.color === "blue")); //filter

console.log(color.slice(0, 2)); // begin, end

console.log(color.concat(color2)); // 배열 합치기

// sort
let chars = ["나", "다", "가"];

chars.sort(); // 원본배열을 정렬

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sort 함수는 문자열 기준으로 장렬하기 때문에 숫자 비교를 위해서는 비교함수 제작
const compare = (a, b) => {
  if (a > b) {
    return 1;
  }

  if (a < b) {
    return -1;
  }

  return 0;
};

numbers.sort(compare);

//배열 record 합치기
const strings = ["황혜진", "님", "안녕하세요", ":)"];

console.log(strings.join(" "));
