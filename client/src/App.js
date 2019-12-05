import React from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard/dashboardpage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./pages/Footer"
import Letters from "./pages/LettersPage/Letters";
import Theatre from "./pages/Theatre/Theatre";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/Dashboard" component={Dashboard}/>
          <Route exact path="/Letters" component={Letters}/>
          <Route exact path="/Theatre" component={Theatre}/>
        </Switch>
      <Footer></Footer>
      </div>
    </Router>
    );
  };
export default App;
