import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Activities from "./components/Activities";
import Dashboard from './components/Dashboard';
import ActivityForm from './components/ActivitiyForm';
import UpdateActivityForm from './components/UpdateActivityForm';

import "./App.css";
// import axios from "axios";

function App() {
  // const [listOfActivities, setListOfActivities] = useState([]);

  // // Get information from server
  // const getItemsFromServer = () => {
  //   axios
  //     .get("http://localhost:7001/api/activities")
  //     .then(response => {
  //       setListOfActivities(response.data)
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  // Display information from server
  return (
    <>
      <Router>
        <Switch>
          {/* <Route path="/activities" component={Activities} /> */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path='/add-activity' component={ActivityForm} />
          <Route path='/update-activity/:id' component={UpdateActivityForm} />

        </Switch>
      </Router>
      {/* <h1 onClick={getItemsFromServer}>Get Activities!</h1>

      {listOfActivities.map(activity => (
        <div>
          <h3>{activity.name}</h3>
          <p>{activity.desc}</p>
          <p>{activity.date}</p>
          <p>{activity.points}</p>
        </div>
      ))} */}
    </>
  );
}

export default App;
