import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header>
       <h1>Welp That's Dinner</h1>
    </header>
    {children}
  </div>
);

export default App;
