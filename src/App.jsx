import React, { Component } from 'react'
import './App.css'
import Main from './components/Main'
import ContactUs from './ContactUs'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/contact-us" component={ContactUs}/>
        </Switch>
      </Router>
    )
  }
}
