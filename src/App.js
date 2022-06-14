import React, { useState } from "react";
import Ingredients from './satateManagement/components/ingredients/Ingredients';
import DisplayNested from './DisplayNested';
export const App = props => {
  const [nestedObjected, setNestedObject] = useState({
    taxi: "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp:
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
      },
    },
  });

  return <DisplayNested nestedObjected={nestedObjected}/>
};

export default App;
