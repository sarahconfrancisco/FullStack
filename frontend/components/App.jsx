import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';
const App = (props) => {
  return(<div>
    <HeaderContainer />
    Hello!
    {props.children}
  </div>
);
}
export default App;
