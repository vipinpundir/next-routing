"use client"
import React, { useState } from 'react'
import { usePathname } from "next/navigation";
import styles from './Page.module.css';

interface WeatherData {
    main: {
        temp: number;
    };
    weather: {
        main: string;
        description: string;
    }[];
    name: string;
}


const page = () => {
    const pathName = usePathname() || '';
    const pathArr = pathName.split('/')
    const city = pathArr[pathArr.length - 1]

    const [weather, setWeather] = useState<WeatherData>({} as WeatherData);
    const [loading, setLoading] = useState(false)


    const getWeatherFromAPI = async () => {
        try {
            setLoading(true)
            // Call 1st API to findout lat and loa values for given city 
            const res1 = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=5912648dc356a2f7b1db3534e152d6bf`)
            const cityDetails = await res1.json()

            if (cityDetails.length !== 0) {
                let lat = cityDetails[0].lat
                let lon = cityDetails[0].lon

                // Call 2nd API to findout Weather detail for that city
                const res2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5912648dc356a2f7b1db3534e152d6bf`)
                const data = await res2.json()
                setWeather(data)
                console.log(data, 'data')
                setLoading(false)
            }

        } catch (error) {
            console.log("Unexpected error", error)
        }
    }
    console.log(typeof weather, weather, 'weather')


    return (
        <>
            <div className={styles.container}>
                <button className={styles.button} onClick={getWeatherFromAPI}>Click to Get Weather details for {city}</button>
                {loading ? <p>Loading...</p> : (
                    <div className={styles.weatherContainer}>
                        <h2 className={styles.header}>Weather Details for {city}</h2>
                        <h3 className={styles.subHeader}>Fixed Format Weather Details:</h3>
                        <p>Temperature: {weather.main?.temp}</p>
                        <p>Weather: {weather.weather?.[0]?.main}</p>
                        <p>Description: {weather.weather?.[0]?.description}</p>
                        <p>City: {weather.name}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default page