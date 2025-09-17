import Greeting from "./components/Greeting";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Logical from "./components/Logical";

function App() {
    //logic
    const handleIncrease=() =>{
        console.log("🍧🍦더하기 버튼 클릭!!")
    }


    //view
    return <div className="App">
        <Logical />
        <Greeting username ="혜정park"/>
        <Greeting username ="박헤죵"/>
        <Greeting username ={"박혜증"}/>
        <Card />
        <Counter onIncreaseClick={handleIncrease}/>
        <Counter step = {5} onIncreaseClick={handleIncrease}/>
        </div>;
}

export default App;
