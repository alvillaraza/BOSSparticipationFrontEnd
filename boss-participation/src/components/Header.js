import React from "react";
import { useHistory } from "react-router-dom";

function Header(props) {
  const logOut = () => {
    localStorage.clear("token");
    history.push("/");
  };

  const history = useHistory();

  return (
    <header className="header-container">
      <h1 className="participation-header">Participation Points</h1>

      {localStorage.getItem("token") ? (
        <button onClick={logOut}>
          Logout
        </button>
      ) : null}

    </header>
  );
}

export default Header;
