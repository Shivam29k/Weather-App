import React, { useState } from 'react'
import { loadWeather } from './weather/weatherAPI';

function Weather({ location, value }) {
    
    loadWeather(value.lat, value.lon)
        .then((response) => {
            console.log(response);
        })

    return (
        <div>
            {location}
            <div>
            </div>
        </div>
    )
}

export default Weather