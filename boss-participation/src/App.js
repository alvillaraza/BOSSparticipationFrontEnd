import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Header from './components/Header';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import ActivityForm from "./components/ActivitiyForm";
import UpdateActivityForm from "./components/UpdateActivityForm";

// import { useHistory } from "react-router-dom";


import "./App.css";

///TO DO: need to know how to logout
///TO DO: how do you make it so that each user has admin rights or not
///TO DO: how do you make it so that each user can click on an activity and add it to their points
///TODO: how to make it so that employees don't see delete and edit activities

function App() {
  // const history = useHistory();
  // console.log(history);

  return (
    <>
      <Header />
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/add-activity" component={ActivityForm} />
          <PrivateRoute
            path="/update-activity/:id"
            component={UpdateActivityForm}
          />

          <Route path="/sign-up" component={Signup} />
          <Route exact path="/" component={Login} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
