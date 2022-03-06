//객체
let person = new Person(); // 생성자 방식
let person2 = {
  name: "황혜진", //프로퍼티 (객체 프로퍼티)
  age: 27, //멤버
  say: function () {
    console.log(`안녕 나는 ${this["name"]}`); // this = person2
  }, //메서드
}; //객체 리터럴 방식

const name = "name";
console.log(person2.name);
console.log(person2["name"]);
console.log(person2[name]);

console.log(getPropertyValue["name"]); //호이스팅
function getPropertyValue(key) {
  return person2[key];
}

person2.location = "한국";
person2["gender"] = "여자"; // property 추가

//property를 수정하는 행위는 object를 수정하는 행위가 아니기 때문에 const여도 에러나지 x

delete person2.name; // 메모리 연결을 지우지 않음
person2.name = null;

console.log(person2);

console.log(`name : ${"name" in person2}`); // 객체안에 해당 프로퍼티 있는지 확인
console.log(`name : ${"school" in person2}`);
