import React from "react";
import { useHistory } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaPlus } from 'react-icons/fa';


const Activities = props => {
  const history = useHistory();

  return (
    <div>
      <h2>Your Activities</h2>
      {/* TODO: {console.log(props)} */}
      <div className="activities-container">
        {props.activities.map(activity => (
          <div key={activity.id}>
            <FaEdit onClick={() => history.push(`/update-activity/${activity.id}`)} />

            <MdDelete onClick={() => props.deleteActivity(activity.id)} />

            <h3>{activity.name}</h3>
            <h3><FaPlus /> {activity.points}</h3>
            <p>{activity.date}</p>
            <p>{activity.activity_type}</p>
            <p>{activity.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
