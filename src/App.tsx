
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
import KeyBlog from './KeyBlog';

function App() {
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  //const numbers=[1,2,3,4]
  return (
    <div>
      <KeyBlog posts={posts} />
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