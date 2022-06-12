import React, { useState, useEffect } from 'react';
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);
  /* const [count ,setCount]= useState(0);
   function Increment(){
     setCount(count+1);
   }
 
   function Decrement(){
     setCount(count-1);
   }
 
   function Reset(){
     setCount(0);
   }*/
  useEffect(() => {
    alert("I am clicked");
    console.log("I am clicked");
  }, []);
  // [],[num],[nums]  its also one methode for useEffect value = {num} onChange = ((event)=>{setNum(event.target.value)})

  /* return (
     <div className="container my-5 bg-secondary border border-dark " >
       <div className='card text-center my-5 bg-white  border-0 '>
         <div className='card-body'>
           <h1 className='text-dark'>Counter App</h1>
           <h2 className='my-5 text-dark'>{count}</h2>
           <div className='btn btn-success mx-3'onClick={Increment}>Increment</div>
           <div className='btn btn-danger mx-3' onClick={Decrement }>Decrement</div>
           <div className='btn btn-dark mx-3' onClick={Reset} disabled = {count === 0}>Reset</div>
         </div>
       </div>
 
     </div>
   );*/
  return (
    <div className='container my-5 mx-5 p-20 btn btn-dark '>
    <button className='btn btn-success ' onClick={() => {
      setNum(num + 1);
    }}>
      Click Me {num}
    </button>
     <br /> <br/>
    <button className='btn btn-warning ' onClick={() => {
      setNums(nums + 1);
    }}>
      Click Me {nums}
    </button>
    </div>
  );
}

export default App;
