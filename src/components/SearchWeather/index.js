import { useQuery } from "react-query";
import "./index.scss";
import { useEffect, useState } from "react";
import WeatherInfoCity from "../WeatherInfoCity";
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export default function SearchWeather() {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    // const { isLoading, data } = useQuery("weather-city", getWeatherCity(city), { retry: false })

    const getWeatherCity = async (event) => {
        event.preventDefault();
        
        try {
            setIsLoading(true)

            const coords = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=${WEATHER_API_KEY}`)
                .then(res => res.json())
                .then(json => json)
            const { lat, lon } = coords[0];

            await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=${WEATHER_API_KEY}`)
                .then(res => res.json())
                .then(json => setWeatherData(json))

            setIsLoading(false);
        } catch(error) {
            console.log(error.message)
        }
    }

    const onChangeCity = (event) => {
        setCity(event.target.value);
    }

    return (
        <>
            <form action="#" onSubmit={getWeatherCity}>
                <input type="text" value={city} onChange={onChangeCity} placeholder="Введите название города" />
                <button type="submit">Найти</button>
            </form>
            <WeatherInfoCity data={weatherData}/>
        </>
    )
}