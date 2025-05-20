
import React, { useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const obj = useState({
    Temperature: 25, Conditions: "Sunny"
  })
  console.log()
  return (
    <div>
      <WeatherDisplay
        Temperature={obj[0].Temperature}
        Conditions={obj[0].Conditions}
      />
    </div>
  )
}

export default App
