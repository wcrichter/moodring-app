import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import CurrentPage from './pages/current'
import EntryPage from './pages/entry'
import TimelinePage from './pages/timeline'

const App = () => {
  return (
    <Router>
      <div>
        <nav className="pa4 mb4 tc bb b--light-gray">
          <Link className="ma2" to="/">Home</Link>
          <Link className="ma2" to="/timeline">Timeline</Link>
        </nav>
        <Route exact path="/" component={CurrentPage} />
        <Route exact path="/new" component={EntryPage} />
        <Route exact path='/timeline' component={TimelinePage} />
      </div>
    </Router>
  )
}

export default App
