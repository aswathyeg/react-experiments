
// list and props example

import React from 'react';
import ClassLifecycle from './ClassLifecycle';
import UseEffectExample from './UseEffectExample';
import animals from './customize components with props/Data';
import AnimalCard from './customize components with props/AnimalCard';
import FormExample from './components/FormExample';
import Counting from './Counting';

function App() {


  return (
    <div>
      {/* {animals.map(animal => 
        <AnimalCard
          diet={animal.diet}
          scientificName={animal.scientificName}
          name={animal.name}
          size={animal.size}

        />

      )} */}
<Counting />
    </div>
  )
}

//const rootElement = document.getElementById("root");
export default App;