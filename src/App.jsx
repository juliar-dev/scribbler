import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import { UserProvider } from "./contexts/UserContext";
import SignUpPage from './containers/Auth/SignUpPage';
import SignInPage from './containers/Auth/SignInPage';
import HomePage from './components/HomePage';

function App() {
  return (
        <Router>
          <div className="App">
            <UserProvider>
              <Route>
                <Route exact path="/" component={HomePage} />
                <Route path="/sign_up" component={SignUpPage} />
                <Route path="/sign_in" component={SignInPage} />
              </Route>
            </UserProvider>
          </div>
        </Router>
  );
}

export default App;
