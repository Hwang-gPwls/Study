import React, { useState } from "react";
import OddEvenResult from "./OddEvenResult";

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  //비구조화 할당, 배열 반환 [상태의 값,상태변화 함수= = useState(초깃값)

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  //상태가 변화하면 reRender
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenResult count={count}></OddEvenResult>
    </div>
  );
};

Counter.defaultProps = {
  initialValue: 0,
};

export default Counter;
