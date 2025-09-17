import React from 'react'
//초기화: rafce

const Greeting = ({username}) => {
  return (
    <div className="greeting">
      <h1>안녕하세요 {username}님 ^^ 
      </h1>
      <h3>오늘도 좋은 하루 보내삼. 💢</h3>
      <p>혜죵</p>
    </div>
  )
}

export default Greeting