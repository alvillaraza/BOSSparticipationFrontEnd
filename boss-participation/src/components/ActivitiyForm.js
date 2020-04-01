import React, { useState } from "react";
import { connect } from "react-redux"; //what does connect do?
import { addActivity } from "../actions";

const ActivityForm = props => {
  const [activity, setActivity] = useState({
    name: "",
    points: "",
    date: "",
    activity_type: "",
    desc: ""
  });

  const { addActivity } = props;

  const handleChanges = e => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    addActivity(activity);
  };

  return (
    <div className="activity-form">
      <h1>Add an Activity</h1>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="name">Activity Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Activity Name"
            onChange={handleChanges}
            value={activity.name}
          />
        </div>
        <div>
          <label htmlFor="points">
            How many points is this activity worth?
          </label>
          <select
            id="points"
            type="select"
            name="points"
            placeholder="Points"
            onChange={handleChanges}
            value={activity.points}
          >
            <option />
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div>
          <label htmlFor="date">When did this activity happen?</label>
          <input
            id="date"
            type="date"
            name="date"
            placeholder="Date of Activity"
            onChange={handleChanges}
            value={activity.date}
          />
          <div>
            <label htmlFor="type">Type of Activity</label>
            <input
              id="type"
              type="text"
              name="activity_type"
              placeholder="Activity Type"
              onChange={handleChanges}
              value={activity.activity_type}
            />

            <div>
              <label htmlFor="description">Description of Activity</label>
              <input
                id="desc"
                type="text"
                name="desc"
                placeholder="Description"
                onChange={handleChanges}
                value={activity.desc}
              />
            </div>
          </div>
        </div>

        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
};

const mapPropsToState = state => {
  return {
    isLoading: state.isLoading
  };
};

export default connect(mapPropsToState, { addActivity })(ActivityForm);
