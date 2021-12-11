import React from "react";


const Country = ({country, weather}) => {

    return (
        <div>
            <h1><span>{country.name['common']}</span></h1>
            <p>capital {country.capital}<br />population {country.population}</p>
            <h2>languages</h2>
            <p>
                <img
                    src={country['flags']['svg']}
                    alt={`Flag of ${country.name['common']}`}
                    height='100'
                    width='100'
                />
            </p>
            <h2>Weather in {country.capital}</h2>
            <p><b>temperature: </b> {weather['current'].temperature} Celcius</p>
            <img src={weather['current'].weather_icons[0]} alt='weather icon' />
            <p><b>wind: </b> {weather['current'].wind_speed} kph direction {weather['current'].wind_dir}</p>
            </div>
    )
}

export default Country