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
      <Link to="/restaurant/1">Dunkin Donuts</Link>
      {this.props.children}
      <Footer />
    </div>
);
}
}
export default App;
