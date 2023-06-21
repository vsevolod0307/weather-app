import Header from "../Header";
import { useQuery } from "react-query";

export default function Layout({children}) {
    const { isLoading, isError, data, error } = useQuery("weather", () => {
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=3270906cf868939a75714f7803a5cb2b`)
        .then(res => res.json())
        .then(json => json)
    })

    return (
        <>
            <Header/>
            {isLoading ? "Loading..." : <span>{data}</span>}
            {error ? error : "not error"}
            <main>
                {children}
            </main>
        </>
    )
}