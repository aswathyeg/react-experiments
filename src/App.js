import React, { useState } from "react";
import CheckboxExample from "./CheckboxExample";
import Navbar from "./components/Navbar";
import SlideList from "./components/slideShow/SlideList";
const App = () => {
  // const [explorerData, setExplorerData] = useState(explorer);
  return (
    <div>
      <Navbar />
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
      <SlideList />
    </div>
  );
};

export default App;
