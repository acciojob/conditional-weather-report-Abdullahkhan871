import React from 'react'

const WeatherDisplay = ({ temperature, conditions }) => {
    return (
        <div>
            <p>
                <span style={{ color: temperature > 20 ? "red" : "blue" }}>
                    {temperature}
                </span>
            </p>
            <p>{conditions}</p>
        </div >
    )
}

export default WeatherDisplay