import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Sign Up</Link>
    <br />
    <Link to="/signup" activeClassName="current">Log In</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">{currentUser.fname}</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Header = (props) => (
  props.currentUser.id ? personalGreeting(props.currentUser, props.logout) : sessionLinks()
);

export default Header;
