import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TextField from './components/TextField'
import Countries from './components/Countries'


const App = () => {


  // Application's state
  const [countries, addCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [capitalCity, setCapitalCity] = useState('Helsinki')
  const [weather, setWeather] = useState('')
    
  //Aplication's effect
  useEffect((() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then( response => {
        addCountries(response.data)
      })
  }), [])

  
  useEffect((() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=33b5df8e39ab023be9bb29875eec679b&query=${capitalCity}`)
      .then(response => {
        setWeather(response.data)
      })
  }), [capitalCity])

  //Aplication's handlers


  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const showCountry = (event) => {
    event.preventDefault()
    setNewFilter(event.target.value)
  }

  const handleCountryChange = (capital) => setCapitalCity(capital)

  
  return (
    <div>
      <TextField
        text='find countries'
        value={newFilter}
        onChange={handleFilterChange}
      />

      <Countries 
        filter={newFilter} 
        countries={countries}
        handleCountryChange={handleCountryChange} 
        showCountry={showCountry}
        weather={weather}
      />
      
    </div>
  );
}

export default App;
