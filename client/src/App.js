import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home'
import Fetch_data from './pages/fetch_data'
import About from './pages/about'

const App = () => (
  <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/fetch_data" component={Fetch_data} />
        </Switch>
      </Router>
  </>
)

export default App;