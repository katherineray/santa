import React from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard/dashboardpage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/Dashboard" component={Dashboard}/>
        </Switch>
      </div>
    </Router>
    );
  };

export default App;
