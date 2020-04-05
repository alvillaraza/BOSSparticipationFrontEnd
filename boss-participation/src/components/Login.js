import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setUserName, setUserInfo } from "../actions";

import axios from "axios";

const LoginForm = props => {
  const [user, setUser] = useState({
    username: "owner",
    password: "123456789"
  });

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const login = event => {
    event.preventDefault();

    axios
      .post("http://localhost:7001/api/auth/login", user)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        props.setUserName(user.username);
        props.setUserInfo(response.data);
        props.history.push("/dashboard");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="login-form">
      <form onSubmit={login}>
        <h2>Welcome Back!</h2>
        <div>
          <label htmlFor="name">Username</label>
          <input
            id="name"
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
            value={user.username}
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            value={user.password}
          />
        </div>
        <button className="login-button" type="login">
          Login
        </button>

        <div>
          New User? Sign up <Link to="/sign-up">here</Link>!
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { setUserName, setUserInfo })(
  LoginForm
);
