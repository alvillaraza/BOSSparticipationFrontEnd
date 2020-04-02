import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = props => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const { history } = props;

  const handleChanges = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const register = event => {
    event.preventDefault();
    const loginUser = {
      username: user.username,
      password: user.password
    };

    axios.post('http://localhost:7001/api/auth/register', loginUser)
      .then(response => {
        history.push('/');
      })
  }
  
  return (
    <div>
      <form onSubmit={register}>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="User Name"
            onChange={handleChanges}
            value={user.username}
          />
        </div>



        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChanges}
            value={user.password}
          />
          {user.password.length > 0 && user.password.length < 8 ? 'Password too short' : ''}
        </div>

        {/* <div>
          <label htmlFor="password2">Confirm Password</label>
          <input
            id="password2"
            type="password"
            name="password2"
            placeholder="re-enter password"
            onChange={handleChanges}
            value={user.password2}
          />
          {user.password !== user.password2 ? 'Password does not match' : ''}
        </div> */}

        <div>
          <button type="submit">Sign Up</button>
        </div>
      

        <div>
          Already a member? Login <Link to='/'>here</Link>!
                </div>


      </form>
    </div>
  )
};

export default Signup;