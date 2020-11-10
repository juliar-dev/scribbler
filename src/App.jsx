import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import SignUpPage from './containers/Auth/SignUpPage';
import SignInPage from './containers/Auth/SignInPage';
import HomePage from './components/HomePage';

function App() {
  return (
        <Router>
          <div className="App">
              <Route>
                <Route exact path="/" component={HomePage} />
                <Route path="/sign_up" component={SignUpPage} />
                <Route path="/sign_in" component={SignInPage} />
              </Route>
          </div>
        </Router>
  );
}

export default App;
