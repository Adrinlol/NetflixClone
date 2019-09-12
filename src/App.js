import React from 'react';
import '../src/sass/App.scss';
import Main from './containers/Main/Main';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
    {/* This will be the main page */}
      <Route exact path="/" component={Main} />
    </Switch>
  );
}

export default App;
