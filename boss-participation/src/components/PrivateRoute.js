import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  // console.log("!", { component: Component, ...rest });
  return (
    <Route
      {...rest}
      render={() => {
        console.log("ls", localStorage.getItem("token"));
        if (localStorage.getItem("token")) {
          console.log("Y");
          return <Component />;
        } else {
          console.log("N");
          return <Redirect to="/" />;
        }
      }}
    />
  );
}

export default PrivateRoute;
