import './Weather.css'
import CustomModal from "./Modal";
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import { useEffect, useRef, useState } from "react";

const Weather = () => {

    const inputref = useRef()
    const [weatherdata, setweather] = useState(false)
    const [modalOpen, setModalOpen] = useState(false);

    const allicons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon,
    }
    console.log("API Key:", import.meta.env.VITE_APP_ID);

    const weather = async (city) => {
        if (!city) {
            setModalOpen(true);
            return;
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            if (!response.ok) {
                alert(data.setModalOpen(true))
                return;
            }
            const icon = allicons[data.weather[0].icon] || clear_icon;
            setweather({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            })
        }
        catch (error) {
            setweather(false)
            console.error("Error in fetching the Data")
        }
    }
    useEffect(() => {
        weather("Berlin")
    }, [])
    return (
        <div className="Container">

            <CustomModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                message="Please enter a city name!"

            />
            <div className="search">
                <input ref={inputref} type="text" placeholder="Search" />
                <img src={search_icon} alt="" onClick={() => weather(inputref.current.value)} />
            </div>
            {weatherdata ? <>
                <img src={weatherdata.icon} alt="" className="weather-icon" />
                <p className="temp">{weatherdata.temperature}°C</p>
                <p className="location">{weatherdata.location}</p>

                <div className="weather-data">
                    <div className="col">
                        <img src={humidity_icon} alt="" />
                        <div>
                            <p>{weatherdata.humidity}%</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className="col">
                        <img src={wind_icon} alt="" />
                        <div>
                            <p>{weatherdata.windSpeed} Km/h</p>
                            <span>Wind</span>
                        </div>
                    </div>
                </div>
            </> : <></>}

        </div>

    )
}
export default Weather