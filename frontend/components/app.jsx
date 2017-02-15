import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';
import Footer from './footer/footer';
import ErrorContainer from './error/error_container';

class App extends React.Component{


render()
{
  return(
    <div>
      <HeaderContainer />
      <ErrorContainer route={this.props.router.location.pathname}/>
      {this.props.children}
      <Footer />
    </div>
);
}
}
export default App;
