import { useEffect, useState } from "react";
import Header from "../Header";
import { useQuery } from "react-query";
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

// const getWeather = async () => {
//     return await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=${WEATHER_API_KEY}`)
//         .then(res => res.json())
//         .then(json => json)
// }

export default function Layout({children}) {
    // const [loaded, setLoaded] = useState()
    // const { isLoading, isError, data, error } = useQuery("weather", getWeather)

    return (
        <div className="container">
            <Header/>
            
            {/* {error ? error : "not error"} */}
            <main>
                {/* {isLoading ? "Loading..." : data.name} */}
                {children}
            </main>
        </div>
    )
}