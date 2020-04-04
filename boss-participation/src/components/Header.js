import React from "react";
// import {Link} from 'react-router-dom';
// import './Header.css';
// import { useHistory } from "react-router-dom";


const Header = () => {
  // const history = useHistory();
  // console.log('history', history);

  // const logOut = () => {
  //   localStorage.clear("token");
  //   // history.push("/");
  // };

  return (
    <header className="header-container">
      <h1 className="participation-header">Participation Points</h1>
      <button onClick={() => {
        localStorage.clear("token")
        // history.push('/')
      }}>Logout</button>
      {/* <div className='nav-links'>

    
      <Link to='/add-campaign'>Add a New Campaign</Link>
      </div> */}
    </header>
  );
}
export default Header;