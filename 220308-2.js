//promise
//비동기 작업이 가질 수 있는 3가지 상태
//pending, fulfilled(resolve), rejected(reject)

function isPositive(number) {
  setTimeout(() => {
    if (typeof number === "number") {
      resolve(number > 0 ? "양수" : "음수");
    } else {
      reject("주어진 값이 숫자형이 아닙니다.");
    }
  }, 2000);
}

isPositive(
  10,
  (res) => {},
  (err) => {}
);

//
//
//

function isPositiveP(number) {
  const executor = (resolve, reject) => {
    setTimeout(() => {
      if (typeof number === "number") {
        resolve(number > 0 ? "양수" : "음수");
      } else {
        reject("주어진 값이 숫자형이 아닙니다.");
      }
    }, 2000);
  };

  const asyncTask = new Promise(executor);
  return asyncTask;
}

const res = isPositiveP(101);

res
  .then((res) => {
    console.log("작업 성공:", res);
  })
  .catch((err) => {
    console.log("작업 실패:", err);
  });

//
//
//

function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

taskA(3, 4, (a_res) => {
  console.log("A TASK RESULT", a_res);
  taskB(a_res, (b_res) => {
    console.log("B TASK RESULT : ", b_res);
    taskC(b_res, (c_res) => {
      console.log("C TASK RESULT : ", c_res);
    });
  });
});

// => then chaining

const bPromiseResult = taskA(5, 1).then((a_res) => {
  console.log("A TASK RESULT", a_res);
  return taskB(a_res);
});

console.log("test");

bPromiseResult
  .then((b_res) => {
    console.log("B TASK RESULT", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("C TASK RESULT", c_res);
  });

//async & await
async function helloAsync() {
  await delay(3000); //동기적 수행
  return "hellog async";
}

console.log(helloAsync());

helloAsync.then((res) => {
  console.log(res);
});

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function main() {
  const res = await helloAsync();
  console.log(res);
}

main();
