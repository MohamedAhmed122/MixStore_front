import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {HomePage} from '../pages/Main/HomePage';
import {LoginPage} from '../pages/Main/LoginPage'
import {ProductDetailPage} from'../pages/Main/ProductDetailPage'
import SandBox from '../sandbox/SandBox';


export default function Navigation() {
    return (
      <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/products/detail/:id'  component={ProductDetailPage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/sand' exact component={SandBox} />
      </Switch>
    )
}
