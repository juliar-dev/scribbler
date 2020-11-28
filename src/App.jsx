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
import WritingPage from './components/newTextPage/WritingPage';
import Nav from './components/Nav';

function App() {
  return (
        <Router>
          <div className="App">
            <UserProvider>
              <Route>
                <Route path = "/" component={Nav}/>
                <Route exact path="/" component={HomePage} />
                <Route path="/sign_up" component={SignUpPage} />
                <Route path="/sign_in" component={SignInPage} />
                <Route path="/write" component={WritingPage} />
              </Route>
            </UserProvider>
          </div>
        </Router>
  );
}

export default App;
