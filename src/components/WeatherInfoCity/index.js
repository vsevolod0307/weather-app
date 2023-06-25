export default function WeatherInfoCity({data}) {

    const { name, main, wind, sys } = data;

    return (
        <>
            <article>
                <div>{name}</div>
                <div>{main?.temp}</div>
                <div>{main?.humidity}</div>
                <div>{main?.pressure}</div>
                <div>{wind?.deg}</div>
                <div>{wind?.speed}</div>
                <div>{wind?.gust}</div>
                <div>{sys?.sunrise}</div>
                <div>{sys?.sunset}</div>
            </article>
        </>
    )
}