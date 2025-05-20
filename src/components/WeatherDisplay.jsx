import React from 'react'

const WeatherDisplay = ({ Temperature, Conditions }) => {
    return (
        <div>
            <p>
                <span style={{ color: Temperature > 20 ? "red" : "blue" }}>
                    {Temperature}
                </span>
            </p>
            <p>{Conditions}</p>
        </div >
    )
}

export default WeatherDisplay