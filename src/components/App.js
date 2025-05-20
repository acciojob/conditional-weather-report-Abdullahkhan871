
import React from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const obj = {
    Temperature: 25, Conditions: "Sunny"
  }
  return (
    <div>
      <WeatherDisplay
        temperature={obj.Temperature}
        Conditions={obj.Conditions}
      />
    </div>
  )
}

export default App
