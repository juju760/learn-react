import React from 'react'

const Logical = () => {
  // logic
  // Logical operators 
  // 1. and 
  const user = {
    isLoggedin: true //로그인 여부
    ,role: "admin" // 사용자 롤 
  }

  //관리자페이지 접근 관리 
  if(user.isLoggedin && user.role === "admin"){
    console.log("🎃 관리자페이지 접근 가능");
  }else{
    console.log("💣🪐 관리자페이지 접근 불가능!");
  }

  //사용자페이지 접근 관리 
  if(user.isLoggedin || user.role === "admin"){
    //true인 경우 실행코드 
    console.log("🎃 사용자 페이지 접근 가능");
  }else{
    console.log("💣🪐 사용자 페이지 접근 불가능!");
  }

  //사용자페이지 접근 관리 
  if(user.isLoggedin || user.role !== "admin"){
    //true인 경우 실행코드 
    console.log("🎃 사용자 페이지 접근 가능");
  }else{
    console.log("💣🪐 사용자 페이지 접근 불가능!");
  }

  if(!user.isLoggedin){
    //로그인 되지 않은 경우 
  }

  //object destructuring
  //구조 분해 할당 (:배열, 객체에서 각각의 값을 손쉽게 변수에 할당하는 것) - 배열, 객체에서 각각의 값이나 속성을 분해하여 손쉽게 별도의 변수에 담아 주는 것.
  const colors = ["red","blue"];
  // const firstColor = colors[0];
  // const secondColor = colors[1];
  // console.log("🚀 ~ Logical ~ secondColor:", secondColor)
  // console.log("🚀 ~ Logical ~ firstColor:", firstColor)
  const [firstColor, secondColor] = colors;
  console.log("🚀 ~ Logical ~ secondColor:", secondColor)
  console.log("🚀 ~ Logical ~ firstColor:", firstColor)


  //객체 구조 분해 할당 
  const person = {
    name: "박혜죵"
    ,mbti: "ESFJ"
  }

  const {name:username, mbti} = person;
  console.log("🚀 ~ Logical ~ mbti:", mbti)
  console.log("🚀 ~ Logical ~ name:", username)


  //spread syntax - 배열이나 객체를 개별요소로 분해하거나 결합할때 사용.
  const copyColors = ["yellow",...colors]
  console.log("🚀 ~ Logical ~ copyColors:", copyColors)
  console.log("🚀 ~ Logical ~ Colors:", colors)

  const copyPerson = {...person, age: 28, mbti: "ISTJ"};
  console.log("🚀 ~ Logical ~ copyPerson:", copyPerson)
  

  // view 
  return (
    <div>Logical</div>
  )
}

export default Logical