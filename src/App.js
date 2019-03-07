import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
