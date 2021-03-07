import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AppContext } from 'providers/AppProvider'

import retrieveCountries from 'logic/retrieve-countries'
import retrieveUser from 'logic/retrieve-user'

import Countries from 'views/Countries/Countries'
import CountriesChart from 'views/CountriesChart/CountriesChart'
import Login from 'views/Login/Login'

const App = () => {
  const [countries, setCountries] = useState([])
  const [user, setUser] = useContext(AppContext)

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

  useEffect(() => {
    const retrievedUser = retrieveUser()
    if (retrievedUser) setUser(retrievedUser)
    else setUser({})
  }, [setUser])

  const handleLogin = user => setUser(user)

  const latinCountries = countries.filter(country => country.isLatino)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Countries latinCountries={latinCountries} user={user} />
        </Route>
        <Route exact path='/login'>
          <Login onLogin={handleLogin} />
        </Route>
        <Route exact path='/chart'>
          <CountriesChart countries={countries} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
