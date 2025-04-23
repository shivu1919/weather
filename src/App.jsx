import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const[city, setCity] = useState('')
  const[temp, setTemp] = useState(false)
  const[weather, setWeather] = useState([])

  useEffect(()=>{
    const url = "https://api.weatherapi.com/v1/forecast.json"
    const api_key = "412b492bf8de4497ae193119252801"
      fetch(`${url}?key=${api_key}&q=Aligarh`)
      .then(response=>response.json())
      .then(data=>{
        setWeather(data)
        setTemp(true)
      })

  },[])


  const searchWeather =()=>{
      const url = "https://api.weatherapi.com/v1/forecast.json"
      const api_key = "412b492bf8de4497ae193119252801"
        fetch(`${url}?key=${api_key}&q=${city}`)
        .then(response=>response.json())
        .then(data=>setWeather(data))

        setCity('')
  }

  return (
    <>
        <div className='main'>
              <div className="child1">
                  <input 
                  id="inp" 
                  value={city}
                  type="text" 
                  placeholder='Enter your city name only...'
                  onChange={(event)=>{setCity(event.target.value)}}
                  />

                  <button onClick={searchWeather} id="btn">Search</button>
              </div>


              {temp && <>
                <div className='child2'>
                  <img src={weather.current.condition.icon}/>
                  <h1 id="tempc">{weather.current.temp_c}°C</h1>
                  
                  <h1 id="place">{weather.location.name}</h1>
                  <h1 id='region'>{weather.location.region}</h1>
                  <h3 id='region'>{weather.location.country}</h3> 
              </div>

              <div className='child3'>
                  <h1>Sunrise: {weather.forecast.forecastday[0].astro.sunrise}</h1>
                  <h1>Sunset: {weather.forecast.forecastday[0].astro.sunset}</h1>
                  <h1>max: {weather.forecast.forecastday[0].day.maxtemp_c}°C</h1>
                  <h1>min: {weather.forecast.forecastday[0].day.mintemp_c}°C</h1>
              </div>
              </>}
        </div>
    </>
  )
}



export default App