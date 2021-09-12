
// list and props example
import LastFloor from './Reducer/LastFloor';
import React from 'react';
import Provider from './contextApI/Provider';
import Building from './contextApI/Building';
import UserDetails from './UserApp/UserDetails';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import { UserList } from './UserApp/UserList';
import LoginHere from './LoginHere';
import AddMe from './Addme';
import AddMeClass from './AddMeClass';
import Addme from './Addme';
import PropsState from './PropsState';
import LiftStateUp from './LiftStateUp';
import ControlledUncontrolled from './Homee';
//import TemperatureInput from './Homee';
//import Home from './Homee';
import Homee from './Homee';
import Refs from './Refs';
import KeyExample from './KeyExample';
import Hello from './Hello';
import PropsContext from './Props';
import Props from './Props';
import ContextExample from './ContextExample';
import DetectHover from './HOCExample';
import IncrementDecrementFunction from './IncrementDecrementFunction';
import LifeCycleMethods from './LifeCycleMethods';




// import CoursesList from './CoursesList';

// const courses = [
//   {
//     id: 1,
//     title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
//     author: "Maximilian Schwarzmülller",
//     hours_video: 40.5,
//     number_of_lectures: 490,
//     rating: 4.6,
//     url: "https://codingthesmartway.com/courses/react-complete-guide/"
//   },
//   {
//     id: 2,
//     title: "Modern React with Redux",
//     author: "Stephen Grider",
//     hours_video: 47.5,
//     number_of_lectures: 488,
//     rating: 4.6,
//     url: "https://codingthesmartway.com/courses/modern-react-with-redux/"
//   },
  // {
  //   id: 3,
  //   title: "The Complete React Developer Course (w/ Hooks and Redux)",
  //   author: "Andrew Mead",
  //   hours_video: 39,
  //   number_of_lectures: 200,
  //   rating: 4.7,
  //   url: "http://codingthesmartway.net/courses/complete-react-web-app-developer/"
  // }
//];

function App() {
  return (
    <div>
   <LifeCycleMethods/>
   
     </div>
  )
}

//const rootElement = document.getElementById("root");
export default App;