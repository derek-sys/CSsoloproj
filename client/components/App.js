import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignupPage from './signupPage';
import LoginPage from './loginPage';
import HomePage from './temp2';
//if (module && module.hot) module.hot.accept();

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/login" component={LoginPage} />

          <Route exact path="/signup" component={SignupPage} />

          <Route exact path="/search" component={HomePage} />

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function lin() {
  return <h2>logge</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
