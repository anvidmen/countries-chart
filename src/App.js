import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import retrieveCountries from 'api/retrieve-countries'

import Countries from 'views/Countries/Countries'

const App = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const getCountries = async () => {
      try {
        const countries = await retrieveCountries()
        setCountries(countries)
      } catch (error) {
        console.log(error)
      }
    }
    getCountries()
  }, [])

  const latinCountries = countries.filter(country => country.is_latino)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Countries latinCountries={latinCountries} />
        </Route>
        <Route exact path='/login' />
        <Route exact path='/chart' />
      </Switch>
    </BrowserRouter>
  )
}

export default App
