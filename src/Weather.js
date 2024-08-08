import axios from 'axios';
import React, { useState } from 'react'
import './Weather.css';
import countryNames from './Countrycodes';
import Footer from './Footer';

export default function Weather() {
    const [city, setCity]=useState();
    const[weather, setWeather]=useState();
    const handleCityChange=(event)=>{
          setCity(event.target.value)
    }
    const fetchWeather=async()=>{
        try{
            const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${'d7aa47355af657e0f7e4e533d2beb1d1'}`)
            console.log(response);
            setWeather(response);
        }
        catch(error){
            console.log("error fetching weather data",error)
        }
    }
    const handleClick=()=>{
        fetchWeather();
    }
  return (
    <div className="container1">
        <h3 className='weather'>Weather APP</h3>
    <div className="container">
        <input type="text" placeholder='Enter City Name' value={city} onChange={handleCityChange} className='city'/>
        <button onClick={handleClick}>Get Weather</button>
        {weather && <>
        <div className="weather_info">
            <h3>{weather.data.name}</h3>
            <h3>{weather.data.sys.country}</h3>
            <p>Temp : {weather.data.main.temp} °C</p>
            <p>{weather.data.weather[0].description}</p>
        </div>
        </>}
    </div>
    <Footer/>
    </div>

  )
}
