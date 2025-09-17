import React from 'react'
import Logical from './../components/Logical';
import Greeting from './../components/Greeting';
import Card from './../components/Card';
import Counter from './../components/Counter';
import Move from '../components/Move';

const Home = () => {
  //logic
  const handleIncrease=() =>{
    console.log("🍧🍦더하기 버튼 클릭!!")
  }

  //view
  return (
    <div>Home
      {/* 페이지 이동 버튼 */}
      <Move /> 
      <Logical />
      <Greeting username ="혜정park"/>
      <Greeting username ="박헤죵"/>
      <Greeting username ={"박혜증"}/>
      <Card />
      <Counter onIncreaseClick={handleIncrease}/>
      <Counter step = {5} onIncreaseClick={handleIncrease}/>
    </div>
    //Home, About, Contact 
  )
}

export default Home