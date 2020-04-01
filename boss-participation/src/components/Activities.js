import React from 'react';
// import { useHistory } from 'react-router-dom';


const Activities = props => {
  // const history = useHistory();

  return (
    <div>
      <h2>Your Activities</h2>
      {console.log(props)}
      <div className='activities-container'>
        {props.activities.map(activity => (
          <div key={activity.id}>
            <h3>{activity.name}</h3>
            <p>{activity.points}</p>
            <p>{activity.date}</p>
            <p>{activity.activity_type}</p>
            <p>{activity.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Activities;