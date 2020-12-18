import React from 'react';
import './App.css';
// import Welcome from './Welcome';
// import Clock from './Clock';
// import Toggle from './Toggle'
// import { render } from '@testing-library/react';
// import ConditionalRendering from './ConditionalRendering';
// import Calculator from './Calculator';
// import Login from './Login';
import SplitPane from './SplitPane';
import Contacts from './Contacts';
import Chat from './Chat';

function App() {
  
    return(
      <div className="App">
      {/* <Welcome /> 
      <Clock />
      <br />
      <Toggle />
      <br />
      <ConditionalRendering />
      <Calculator /> */}
      {/* <br />
      <Login /> */}
      <SplitPane left={<Contacts />} right={<Chat />}/>
     </div>
     
   );
    
  
  
  
}




export default App;
