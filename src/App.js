import React, { useState } from "react";
import AddMe from "./AddMe";
import CheckboxExample from "./CheckboxExample";
import Navbar from "./components/Navbar";
import SlideList from "./components/slideShow/SlideList";
import Effect from "./revision/Effect";
import FetchData from "./revision/FetchData";
const App = () => {
  // const [explorerData, setExplorerData] = useState(explorer);
  return (
    <div>
      <AddMe />
      {/* <Folder explore={explorerData} /> */}
      {/* <LifeCycleMethods /> */}
      {/* <RemoveElement /> */}
      {/* <CheckboxExample label="Subscribe?" checked={true} />
      <CheckboxExample
        label="I agree to terms & conditions"
        checked={true}
        disabled
      />
      <CheckboxExample label="Save form inputs to storage?" /> */}
    </div>
  );
};

export default App;
