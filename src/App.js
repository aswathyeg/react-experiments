import React, { useState } from 'react';
import './App.css';
import './useContextExample/index.css';
import ForwardCounting from './customHooks/ForwardCounting';
import BackwardCounting from './customHooks/BackwardCounting';

function App() {
  return (
    <div className="App">

<ForwardCounting/>
<BackwardCounting/>
     
    </div>
  );
  

}

export default App;