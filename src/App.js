import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

const Error = () => {
  return (
    <div>
      Not found
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <ul>
        <li><Link to='/page1/100' >Page 1</Link></li>
        <li><Link to='/page2/100'>Page 2</Link></li>
      </ul>
      <Switch>
        <Route exact path='/page1/:id' component={Page1} />
        <Route exact path='/page2/:id' component={Page2} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
