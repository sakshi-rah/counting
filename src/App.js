import React, { useState } from 'react';
import "./App.css";

function App() {
  const [count ,setCount]= useState(0);
  function Increment(){
    setCount(count+1);
  }

  function Decrement(){
    setCount(count-1);
  }

  function Reset(){
    setCount(0);
  }
  return (
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
  );
}

export default App;
