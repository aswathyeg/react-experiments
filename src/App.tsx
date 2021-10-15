import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstTeam from './RoutingExample/FirstTeam';
import SecondTeam from './RoutingExample/SecondTeam';
import TeamSummary from './RoutingExample/TeamSummary';
import LandingSider from './RoutingExample/LandingSider';
import { useEffect ,useState} from 'react';
import  Chart  from "./components/Chart";

      
function App() {
  
  useEffect(()=>{
    const dashboard=async ()=>{
      const res=await fetch('http://localhost:8080/dashboards')
      const data=await res.json()
      setChartData({
        ClassId:data.data.map((crypto) => crypto.ClassId),
        datasets: [
          {
            ClassId: 101,
            data: data.data.map((crypto) => crypto.StudentCount),
            backgroundColor: [
              "#ffbb11",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ]
          }
        ]
      });
    };
    dashboard ()
  },[]);
 
  const [chartData, setChartData]=useState({})

  return (
    <div className="App">
      <Chart chartData={chartData} />
     </div>



  )
}

export default App;