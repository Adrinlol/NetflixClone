import React from 'react';
import Main from './containers/Main';
import Plan from './components/Plan';
import { Switch, Route } from 'react-router-dom';
import '../src/sass/App.scss';

function App() {
  return (
    <Switch>
    {/* This will be the main page */}
      <Route exact path="/" component={Main} />
      <Route path="/plan" component={Plan} />
    </Switch>
  );
}

export default App;
