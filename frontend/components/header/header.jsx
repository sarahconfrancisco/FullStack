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

      <Link to="/signup" activeClassName="current">
        <button>Sign Up</button>
      </Link>
      <br />
      <Link to="/login" activeClassName="current">
        <button>Log In</button>
      </Link>
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
      <nav className="header">
        {(this.props.currentUser && this.props.currentUser.id) ?   <Link>
          Add Your Restaurant
          </Link>
        : <Link></Link>}

        <Link to="/"><img className="small-logo" src={window.images.logo} /></Link>
        {(this.props.currentUser && this.props.currentUser.id) ? this.personalGreeting() : this.sessionLinks()}
      </nav>
    );
  };
}



export default Header;
