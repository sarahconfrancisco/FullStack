import React from 'react';
import { Link } from 'react-router';

const App = (props) => (
  <div>
    <header>
       <h1>Welp That's Dinner</h1>
    </header>
    {props.children}
  </div>
);

export default App;
