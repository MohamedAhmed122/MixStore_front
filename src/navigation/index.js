import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {HomePage} from '../pages/Main/HomePage';
import {LoginPage} from '../pages/Main/LoginPage'

export default function Navigation() {
    return (
      <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/login' exact component={LoginPage} />
      </Switch>
    )
}
