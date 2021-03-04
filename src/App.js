import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' />
        <Route exact path='/login' />
        <Route exact path='/chart' />
      </Switch>
    </BrowserRouter>
  )
}

export default App
