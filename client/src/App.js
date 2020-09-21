import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home'
import Fetch_data from './pages/fetch_data'

const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fetch_data" component={Fetch_data} />
      </Switch>
    </Router>
  </>
)

export default App;
