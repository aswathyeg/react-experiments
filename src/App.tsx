
// list and props example

import React from 'react';
import ClassLifecycle from './ClassLifecycle';
import UseEffectExample from './UseEffectExample';
import animals from './customize components with props/Data';
import AnimalCard from './customize components with props/AnimalCard';
import FormExample from './components/FormExample';
import Counting from './Counting';
import RiverInformation from './RiverInformation';
import KeyExample from './KeyExample';
import Keys from './Keys';
import Keyexample from './Keyexamples';

function App() {

  const numbers=[1,2,3,4]
  return (
    <div>
      <Keyexample numbers={numbers} />
      {/* {animals.map(animal => 
        <AnimalCard
          diet={animal.diet}
          scientificName={animal.scientificName}
          name={animal.name}
          size={animal.size}

        />

      )} */}
{/* <div className="wrapper">
      <h1>World's Longest Rivers</h1>
      <RiverInformation />
    </div> */}
    </div>
  )
}

//const rootElement = document.getElementById("root");
export default App;