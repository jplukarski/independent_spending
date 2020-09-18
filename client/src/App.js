import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Admin from './pages/Admin'
import Schedule_E_By_Candidate from './pages/Schedule_E_By_Candidate'
import Candidates from './pages/Candidate_Information'


function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/schedule_e_by_candidate" component={Schedule_E_By_Candidate} />
          <Route exact path='/admin/candidates' component={Candidates}/>
          <Route exact path="/" component={Home}/>
        </Switch>
    </Router>
  );
}

export default App;
