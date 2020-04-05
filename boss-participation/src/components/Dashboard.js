import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getActivities, updateActivity, deleteActivity } from "../actions";
import Activities from "./Activities";

function Dashboard(props) {
  console.log("Dashboard props", props);

  const {
    isLoading,
    isUpdating,
    activities,
    getActivities,
    updateActivity,
    deleteActivity
  } = props;

  const history = useHistory(); //can't remember what this is for

  useEffect(() => {
    getActivities();
  }, [getActivities]);

  return (
    <div>
      <h2>Welcome to Your Dashboard, {props.username}</h2>
      <h3>
        You are{" "}
        {props.userInformation.is_owner === 1 ? "an admin!" : "a basic user"}
      </h3>

      <button onClick={() => history.push("/add-activity")}>
        Add an Acitivity
      </button>

      <div className="activities-container">
        {activities === undefined || activities.length === 0 ? (
          <p>Add An Acitivity to see it here</p>
        ) : (
          !isLoading &&
          !isUpdating && (
            <Activities
              activities={activities}
              deleteActivity={deleteActivity}
              updateActivity={updateActivity}
            />
          )
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ...state, // THE STUPIDITY
    isLoading: state.isLoading,
    error: state.error,
    activities: state.activities,
    isUpdating: state.isUpdating,
    username: state.username,
    history: useHistory
  };
};

export default connect(mapStateToProps, {
  getActivities,
  updateActivity,
  deleteActivity
})(Dashboard);
