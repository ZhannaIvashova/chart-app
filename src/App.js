import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

function App() {
  const data = [
    ["Task", "Hours per Day"],
    ["Work/lessons", 15],
    ["Eat", 3],
    ["Commute", 4],
    ["Sport", 4],
    ["Walk", 5],
    ["Sleep", 9]
  ];
  
  const options = {
    title: "My Daily Activities",
  };
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
    </div>
  );
}

export default App;
