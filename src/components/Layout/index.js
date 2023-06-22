import { useEffect, useState } from "react";
import Header from "../Header";
import { useQuery } from "react-query";

const getWeather = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=3270906cf868939a75714f7803a5cb2b`)
    return res.json();
}

export default function Layout({children}) {
    // const [loaded, setLoaded] = useState()
    const { isLoading, isError, data, error } = useQuery("weather", getWeather)

    return (
        <>
            <Header/>
            {isLoading ? "Loading..." : "Loading Success"}
            {/* {error ? error : "not error"} */}
            <main>
                {children}
            </main>
        </>
    )
}