import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import axiosWithAuth from "../utils/AxiosWithAuth";
import { updateActivity } from "../actions";

const UpdateActivityForm = props => {
  const { id } = useParams();

  const [activity, setActivity] = useState({
    name: "",
    points: "",
    date: "",
    activity_type: "",
    desc: ""
  });

  const { updateActivity } = props;

  useEffect(() => {
    axiosWithAuth()
      .get(`/activities/${id}`)
      .then(response => {
        setActivity({
          name: response.data.name,
          points: response.data.points,
          date: response.data.date,
          activity_type: response.data.activity_type,
          desc: response.data.desc
        });
      })
      .catch(error => console.log(error));
  }, [id]);

  const handleChanges = e => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    updateActivity(activity, id);
  };

  return (
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
        <label htmlFor="points">How many points is this activity worth?</label>
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
          placeholder="MM/DD/YYYY"
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

      <button type="submit">Update Activity</button>
    </form>
  );
};

const mapPropsToState = state => {
  return {
    state
  };
};

export default connect(mapPropsToState, { updateActivity })(UpdateActivityForm);
