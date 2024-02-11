import React, { useEffect, useState } from 'react'
import { loadWeather } from './weatherAPI';

function Weather({ location, value }) {
    const [data, setData] = useState(null);

    console.log("re-rendering.......");



    useEffect(() => {
        loadWeather(value.lat, value.lon)
            .then(data => {
                setData(data)
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [value]);

    return (
        <div className='body'>
            <div className="location">📍{location}</div>
            {data ? <Info data={data} /> : <Loading />}
            <div className="fotter">Made with love 💖 by Shivam</div>
        </div>
    )
}

function Loading() {
    return <div className='loading'>
        <div class="loader loader--style8" title="7">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="24px" height="30px" viewBox="0 0 24 30" style={{enableBackground:"new 0 0 50 50"}} xml:space="preserve">
                <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
                    <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" />
                    <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
                    <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
                </rect>
                <rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2">
                    <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                    <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                    <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                </rect>
                <rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2">
                    <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                    <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                    <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                </rect>
            </svg>
        </div>
    </div>
}

function Info({ data }) {
    const [dates, setDate] = useState([]);

    const generateDates = (startDate, days) => {
        const date = new Date(startDate);
        return Array.from({ length: days }, (_, i) => {
            const currentDate = new Date(date);
            date.setDate(date.getDate() + 1);
            return currentDate.toLocaleString('default', { day: 'numeric', month: 'short' });
        });
    }

    useEffect(() => {
        setDate(generateDates(new Date(), 5));
        console.log(dates);
    }, []);

    return <div className="currentInfo">
        <div className="currentTemp">
            <h3>{parseFloat((data.current.main.feels_like).toFixed(1))}</h3>
            <p>°C</p>
        </div>
        <div className="dayTemp">
            <div className="daymin">Day Min : {data.forecast.day1.min} °C</div>
            <div className="daymax">Day max : {data.forecast.day1.max} °C</div>
        </div>
        <div className="weatherInfo">
            <div className="weatherIcon" style={{ backgroundImage: `url(https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png)` }}></div>
            <div>
                <h4>{data.current.weather[0].main}</h4>
                <p>{data.current.weather[0].description}</p>
                <p>Visibility - {data.current.visibility} m</p>
                <p>Cloudcover - {data.current.clouds.all}%</p>
            </div>
        </div>
        <div className="forecast">
            <h3>5 days temperature forecast</h3>
            {/* first get current date then make 3 divs based on next 3 dates */}
            <div className="daysForecast">
                {dates.map((date, index) => {
                    return <div key={index}>
                        <h4>{date}</h4>
                        <p>{data.forecast[`day${index + 1}`].max} °C</p>
                        <p>{data.forecast[`day${index + 1}`].min} °C</p>
                    </div>

                })}
            </div>
        </div>
    </div>
}

export default Weather