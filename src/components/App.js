
import React from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const obj = { temperature: 25, conditions: "Sunny" }
  return (
    <div>
      <WeatherDisplay
        temperature={obj.temperature}
        conditions={obj.conditions}
      />
    </div>
  )
}

export default App
