import React from 'react';
import { Link } from 'react-router';




class Header extends React.Component {

  constructor(props){
    super(props);
    this.sessionLinks = this.sessionLinks.bind(this);
    this.personalGreeting = this.personalGreeting.bind(this);
    this.guestSignin = this.guestSignin.bind(this);
  }

  sessionLinks(){
    return (
    <nav className="login-signup">
      <Link to="/signup" activeClassName="current">Sign Up</Link>
      <br />
      <Link to="/login" activeClassName="current">Log In</Link>
      <br />
      <button onClick={this.guestSignin()}>Login as Guest</button>
    </nav>
    );
}

  guestSignin(){
    return () => this.props.login({user: {"email": "guest@gmail.com", "password": "password"}});
  }

  personalGreeting(){
    return(
    <hgroup className="header-group">
      <h6 className="header-name">Hello, {this.props.currentUser.fname}</h6>
      <button className="header-button" onClick={this.props.logout}>Log Out</button>
    </hgroup>
  );
}

  render(){
    return(
      (this.props.currentUser && this.props.currentUser.id) ? this.personalGreeting() : this.sessionLinks()
    );
  };
}



export default Header;
