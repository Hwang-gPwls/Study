//동기 & 비동기

//자바스크립트는 코드가 작성된 순서대로 작업을 처리함
//이전 작업이 진행 중 일 떄는 다음 작업을 수행하지 않고 기다림
//먼저 작성된 코드를 먼저 다 설명하고 나서 뒤에 작성된 코드를 실행한다.

//동기적 처리의 단점은 하나의 작업이 너무 오래 걸리게 될 시, 모든 작업이 오래 걸리는 하나의 작업이 종료되기 전 까지 모두 스탑 되기 떄문
// => 멀티 쓰레드 but 자바스크립트는 싱글 쓰레드

// => 논블로킹 방식

function taskA(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}

function taskB(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}

function taskC(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}

taskA(3, 4, (res) => {
  console.log("A TASK RESULT : ", res);
});

taskB(3, 4, (res) => {
  console.log("B TASK RESULT : ", res);
});

taskC(3, 4, (res) => {
  console.log("C TASK RESULT : ", res);
});

//JS Engine => Heap, Call Stack, main context기 call stack에서 제거되는 순간이 프로그램 종료
//Web APIs
//Callback Queue

taskA(4, 5, (a_res) => {
  console.log("A RESULT", a_res);
  taskB(a_res, (b_res) => {
    console.log("B TASK RESULT : ", b_res);
    taskC(b_res, (c_res) => {
      console.log("C TASK RESULT : ", c_res);
    });
  });
});
