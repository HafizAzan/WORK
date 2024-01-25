import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // let count = 0  waja plus na hone ki q ke ismai hamai hook use krna hoga jabhi hoga hal esay nhi hota
  const [count, setCount] = useState(0);
  const [isShowWriting, setIsShowWirting] = useState(true); 
  const increaseMent = () =>{
    // count = count + 1
    setCount(count + 1) // is setCount ke pechay re -render yani refresh krra hoga component ko
    console.log(count , "cliked!")
  }
  
  const disincreament = () =>{
    setCount(count - 1) 
  }

  const ShowBtn = () => {
    setIsShowWirting(true)
  }

  const hideBtn = () => {
    setIsShowWirting(false)
  }

  const changing = (e) =>{
    let current = e.target;
    if( current.value <= 0){
      current.value = 0
      setCount(count = 0) 
    }
  }
  return (
    <div className='centerKrna'>
    <h1 value = "0" onChange={changing}>Count {count}</h1>
    <button onClick ={increaseMent}>Increase</button>  &nbsp;
    <button onClick={disincreament}>disincrease</button>
    <br/>
    {isShowWriting && <h1>Show And Hide Just Click</h1>}
    <button onClick ={ShowBtn}>showBTn</button>  
    <button onClick={hideBtn}>HideBtn</button> &nbsp;
    <br/>
    <button onClick={() => setIsShowWirting(!isShowWriting)}>
    show/hide
    </button>
    </div>
  );
}

export default App;
