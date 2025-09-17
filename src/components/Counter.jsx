import React, { useState } from 'react'
//jsx는 자바스크립트와 html이 혼합된 파일 

const Counter = () => {
  // logic (javascript)
  // let count = 0;
  // state 
  const [count, setCount] = useState(0);
  //console.log("🚀 ~ Counter ~ count:", count)
  //count: 값을의미, setCount: 함수를의미 
  const MAX = 10;
  const MIN = 0;

  const handleIncrease=()=>{
    if (count === MAX) return;
    // count += 1;
    setCount(count+1);
    console.log("🚀 ~ handleIncrease ~ count:", count)
  }

  const handleDecrease=()=>{
    if(count === MIN) return;
    // setCount(count-1);
    setCount((prev) => prev - 1);
    console.log("🚀 ~ handleDecrease ~ count:", count)
  }


  //view (html)
  return (
    <div>
      <h1>카운터</h1>
      <h2>{count}</h2>
      <div>
        <button type="button"
        onClick={handleIncrease}>+1</button>
        <button type="button"
        onClick={handleDecrease}>-1</button>
      </div>
    </div>
  )
}

export default Counter