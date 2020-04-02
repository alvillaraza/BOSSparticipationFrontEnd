import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
// import Activities from "./components/Activities";
import Dashboard from "./components/Dashboard";
import ActivityForm from "./components/ActivitiyForm";
import UpdateActivityForm from "./components/UpdateActivityForm";
import Login from "./components/Login";
import Signup from "./components/Signup";

import "./App.css";
// import axios from "axios";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route path="/activities" component={Activities} /> */}
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/add-activity" component={ActivityForm} />
          <PrivateRoute
            path="/update-activity/:id"
            component={UpdateActivityForm}
          />

          <Route exact path="/" component={Login} />
          <Route path="/sign-up" component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
