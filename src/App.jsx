import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SignUpPage from './containers/Auth/SignUpPage';
import SignInPage from './containers/Auth/SignInPage';
import HomePage from './components/HomePage';
import PageContent from './components/PageContent';
import Dashboard from "./containers/Main/Dashboard"
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <PageContent>
      <LanguageProvider>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/sign_up">
                <SignUpPage />
              </Route>
              <Route path="/sign_in">
                <SignInPage />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </div>
        </Router>
      </LanguageProvider>
    </PageContent>
  );
}

export default App;
